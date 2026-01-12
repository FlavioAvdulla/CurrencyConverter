#include <emscripten/bind.h>
#include <map>
#include <string>

class CurrencyConverter {
private:
    std::map<std::string, double> exchangeRates;
    
public:
    CurrencyConverter() {
        // Base currency: USD
        exchangeRates["USD"] = 1.0;
        exchangeRates["EUR"] = 0.85;
        exchangeRates["GBP"] = 0.73;
        exchangeRates["JPY"] = 110.5;
        exchangeRates["INR"] = 74.5;
        // Add more currencies
    }
    
    double convert(double amount, std::string fromCurrency, std::string toCurrency) {
        if (exchangeRates.find(fromCurrency) == exchangeRates.end() ||
            exchangeRates.find(toCurrency) == exchangeRates.end()) {
            return 0.0;
        }
        
        // Convert to USD first, then to target currency
        double amountInUSD = amount / exchangeRates[fromCurrency];
        return amountInUSD * exchangeRates[toCurrency];
    }
    
    void updateRate(std::string currency, double rate) {
        exchangeRates[currency] = rate;
    }
    
    double getRate(std::string currency) {
        return exchangeRates[currency];
    }
};

// Export to JavaScript
EMSCRIPTEN_BINDINGS(currency_converter) {
    emscripten::class_<CurrencyConverter>("CurrencyConverter")
        .constructor()
        .function("convert", &CurrencyConverter::convert)
        .function("updateRate", &CurrencyConverter::updateRate)
        .function("getRate", &CurrencyConverter::getRate);
}