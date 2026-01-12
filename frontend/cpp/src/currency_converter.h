#ifndef CURRENCY_CONVERTER_H
#define CURRENCY_CONVERTER_H

#include <string>
#include <map>
#include <vector>

class CurrencyConverter {
private:
    std::map<std::string, double> exchangeRates;
    std::string baseCurrency = "USD";
    
public:
    CurrencyConverter();
    
    double convert(double amount, const std::string& fromCurrency, const std::string& toCurrency);
    double getRate(const std::string& currency);
    void updateRate(const std::string& currency, double rate);
    void updateRatesFromJSON(const std::string& jsonData);
    std::vector<std::string> getAvailableCurrencies();
    std::string getBaseCurrency();
    void setBaseCurrency(const std::string& currency);
};

#endif