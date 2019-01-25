const data = {
    themes: {
      primaryColor: "String",
    },
    currencies: {
      baseCurrency: String,
      quoteCurrency: String,
      amount: Number,
      conversions: {
        [CURRENCY_STRING]: {
          isFetching: Boolean,
          date: String, // from api
          base: String, // from api
          rates: { // from api
            [CURRENCY_STRING]: Number,
            
          },
        }
      }
    }
  }