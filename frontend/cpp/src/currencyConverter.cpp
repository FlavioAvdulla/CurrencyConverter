#include "currency_converter.h"
#include <cmath>
#include <sstream>
#include <iostream>
#include <emscripten/bind.h>
#include <nlohmann/json.hpp>

using json = nlohmann::json;

CurrencyConverter::CurrencyConverter() {
    // Default exchange rates (USD based)
    exchangeRates = {
        {"USD", 1.0},
        {"EUR", 0.92},
        {"GBP", 0.79},
        {"JPY", 149.50},
        {"INR", 83.12},
        {"CAD", 1.36},
        {"AUD", 1.52},
        {"CHF", 0.88},
        {"CNY", 7.18},
        {"KRW", 1332.45},
        {"RUB", 92.50},
        {"BRL", 4.95},
        {"MXN", 17.25},
        {"ALL", 95.50}
    };
}

double CurrencyConverter::convert(double amount, const std::string& fromCurrency, const std::string& toCurrency) {
    // Check if currencies exist
    if (exchangeRates.find(fromCurrency) == exchangeRates.end() ||
        exchangeRates.find(toCurrency) == exchangeRates.end()) {
        return 0.0;
    }
    
    // Convert to base currency first, then to target
    double fromRate = exchangeRates[fromCurrency];
    double toRate = exchangeRates[toCurrency];
    
    // Convert amount to base currency
    double amountInBase = amount / fromRate;
    
    // Convert from base to target currency
    double result = amountInBase * toRate;
    
    // Round to 4 decimal places
    return std::round(result * 10000) / 10000;
}

double CurrencyConverter::getRate(const std::string& currency) {
    auto it = exchangeRates.find(currency);
    if (it != exchangeRates.end()) {
        return it->second;
    }
    return 0.0;
}

void CurrencyConverter::updateRate(const std::string& currency, double rate) {
    exchangeRates[currency] = rate;
}

void CurrencyConverter::updateRatesFromJSON(const std::string& jsonData) {
    try {
        json rates = json::parse(jsonData);
        for (auto& [key, value] : rates.items()) {
            std::string currency = key;
            double rate = value;
            exchangeRates[currency] = rate;
        }
    } catch (const std::exception& e) {
        std::cerr << "Error parsing JSON: " << e.what() << std::endl;
    }
}

std::vector<std::string> CurrencyConverter::getAvailableCurrencies() {
    std::vector<std::string> currencies;
    for (const auto& [key, value] : exchangeRates) {
        currencies.push_back(key);
    }
    return currencies;
}

std::string CurrencyConverter::getBaseCurrency() {
    return baseCurrency;
}

void CurrencyConverter::setBaseCurrency(const std::string& currency) {
    if (exchangeRates.find(currency) != exchangeRates.end()) {
        baseCurrency = currency;
    }
}

// EMSCRIPTEN BINDINGS
EMSCRIPTEN_BINDINGS(currency_converter) {
    emscripten::class_<CurrencyConverter>("CurrencyConverter")
        .constructor()
        .function("convert", &CurrencyConverter::convert)
        .function("getRate", &CurrencyConverter::getRate)
        .function("updateRate", &CurrencyConverter::updateRate)
        .function("updateRatesFromJSON", &CurrencyConverter::updateRatesFromJSON)
        .function("getAvailableCurrencies", &CurrencyConverter::getAvailableCurrencies)
        .function("getBaseCurrency", &CurrencyConverter::getBaseCurrency)
        .function("setBaseCurrency", &CurrencyConverter::setBaseCurrency);
    
    emscripten::register_vector<std::string>("vector<string>");
}