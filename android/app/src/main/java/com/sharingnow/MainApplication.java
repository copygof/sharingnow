package com.sharingnow;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.facebook.CallbackManager;
import com.facebook.FacebookSdk;
import com.facebook.reactnative.androidsdk.FBSDKPackage;
import com.facebook.appevents.AppEventsLogger;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private static CallbackManager mCallbackManager = CallbackManager.Factory.create();

  protected static CallbackManager getCallbackManager() {
    return mCallbackManager;
  }
  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new FBSDKPackage(mCallbackManager)
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    // SoLoader.init(this, /* native exopackage */ false);
      FacebookSdk.sdkInitialize(getApplicationContext());
      // If you want to use AppEventsLogger to log events.
      AppEventsLogger.activateApp(this);
          // Add code to print out the key hash
    // try {
    //     PackageInfo info = getPackageManager().getPackageInfo(
    //             "com.sharingnow", 
    //             PackageManager.GET_SIGNATURES);
    //     for (Signature signature : info.signatures) {
    //         MessageDigest md = MessageDigest.getInstance("SHA");
    //         md.update(signature.toByteArray());
    //         Log.d("KeyHash:", Base64.encodeToString(md.digest(), Base64.DEFAULT));
    //         }
    // } catch (NameNotFoundException e) {
        
    // } catch (NoSuchAlgorithmException e) {
        
    // }
  }
}
