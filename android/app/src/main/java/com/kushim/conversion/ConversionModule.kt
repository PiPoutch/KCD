package com.kushim.conversion
import android.os.Bundle
import com.facebook.react.ReactPackage
import com.facebook.react.bridge.*
import com.facebook.react.uimanager.ViewManager
import com.kushim.R
import okhttp3.*
import okhttp3.Callback
import java.io.IOException


class ConversionModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

        private val client = OkHttpClient()

        @ReactMethod
        fun convert(url: String, currencyFrom: String, currencyTo: String, amount: String, key: String, promise: Promise) {
            val request = Request.Builder()
                    .url("$url?from=$currencyFrom&to=$currencyTo&amount=$amount&access_key=$key")
                    .build()

            client.newCall(request).enqueue(object : Callback {
                override fun onFailure(call: Call, e: IOException) {
                    promise.reject("403", "Unknown error")
                }
                override fun onResponse(call: Call, response: Response) {
                    val body = response.body?.string();
                    promise.resolve(body)
                }
            })
            println("test")

        }

    override fun getName(): String {
        return "ConversionModule"
    }

    override fun initialize() {
        return
    }

    override fun canOverrideExistingModule(): Boolean {
        return false
    }

    override fun onCatalystInstanceDestroy() {
        return
    }

    override fun invalidate() {
        return
    }
}
