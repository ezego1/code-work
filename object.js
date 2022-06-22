const obj = {
    data: [
        {
            setting_name: "CREATE-VIRTUAL-ACCOUNT",
            value: "true"
        },
        {
            setting_name: "ENABLE-WITHDRAWAL",
            value: "true"
        },
        {
            setting_name: "CURRENCY-CODE",
            value: "NGN,USD"
        },
        {
            setting_name: "FACE-MACTH-THRESHOLD",
            value: "0.5"
        },
        {
            setting_name: "CREATE-WALLET-URL",
            value: "https://stg-base-services.seamfix.com/wallets-base/wallets/create"
        },
        {
            setting_name: "DEBIT-WALLET-URL",
            value: "https://stg-base-services.seamfix.com/wallets-base/wallets/debit"
        },
        {
            setting_name: "GET-BALANCE-URL",
            value: "https://stg-base-services.seamfix.com/wallets-base/wallets/balance"
        },
        {
            setting_name: "LOGIN-CONTEXT-URL",
            value: "https://stg-base-services.seamfix.com/user-creation-base/users/login-context"
        },
        {
            setting_name: "PRODUCT-ID",
            value: "609b2586-e896-4c66-8ac2-d8f7a06cc5ff"
        },
        
        {
                setting_name: "EMAIL_SIGNUP_URL",
                value: "http://sasp-app.dev.seamfix.com.s3-website-us-east-1.amazonaws.com/#"
        },
        {
                setting_name: "METABASE_DASBOARD_LIVE_URL_SUFFIX",
                value: "&bordered=true&titled=true"
        },
        {
                setting_name: "METABASE_DASBOARD_LIVE_URL_PREFIX",
                value: "https://analytics.seamfix.com/embed/dashboard/"
        },
        {
            setting_name: "METABASE_DASBOARD_STAGING_URL_PREFIX",
            value: "https://analytics.seamfix.com/embed/dashboard/"
        },
        {
            setting_name: "METABASE_DASBOARD_STAGING_URL_SUFFIX",
            value: "&bordered=true&titled=true"
        },
        {
                setting_name: "SITE_URL",
                value: "https://analytics.seamfix.com"
        },
        {
                setting_name: "PRODUCT_ADMIN_DASHBOARD_NUMBER",
                value: "2256"
        },
        {
                setting_name: "META_BASE_SECRET_KEY",
                value: "3012b684a597b051cf8ad2492f270a340362b30d4bf4099b8c94795f11d70cb1"
        }
    ],
}

function getSetting(data, name) {
    return data.filter((item) => {
        if (item.setting_name.toLowerCase() === name.toLowerCase()) {
            return item['value']
        }else {
            return null
        }
    })
}

const Yes = getSetting(obj.data, "META_BASE_SECRET_KEY")
console.log(Yes)