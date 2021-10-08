# Kushim coding test

This is the repository for the Kushim coding test developed by Pierre Morel

## Cloning and installation for development

### Running Prerequesites

IMPORTANT: You will find OS-specific installation tips and prerequisites on the [React-native getting started guide](https://reactnative.dev/docs/environment-setup). Always select React Native CLI and never Expo. Please do check the OS specific guide as prerequisites may not all be listed in this readme.

Whatever platform you are developing on, you will need to install
 1. [Node.js](https://nodejs.org) latest LTS version (minimum version 8.3, you may use [nvm](https://github.com/nvm-sh/nvm) if you want to have concurrent version of nodejs on your development system).
 2. a JDK, at [least version 8](https://www.oracle.com/java/technologies/downloads/#java8)
 3. [Android Studio](https://developer.android.com/studio). Once you have installed Android Studio, you will need to install several tools. For that, launch Android Studio, go to Preferences/Settings > Appearance and Behavior > System Settings > Android SDK. Under the SDK Platforms Tab, check Show Package Details, and under Android 9.0, check the following boxes.  
 ![androidsdk](/dev_utils/readme_assets/androidsdk.png)  
 Then, under the SDK Tools tab, check the following boxes  
 ![sdktools](/dev_utils/readme_assets/sdktools.png)  
 Under that same tab, and under Android SDK Build-tools, select 28.0.3, as well as the latest version available.  
 Click Apply to download the selected components.
 4. Add ANDROID_HOME to your PATH. You will find detailed instructions on how to do this depending on your platform. For bash users on mac and linux, you can add these lines to your `~/.bashrc` file:
    ```  
    export ANDROID_HOME=$HOME/Library/Android/sdk
    export PATH=$PATH:$ANDROID_HOME/emulator
    export PATH=$PATH:$ANDROID_HOME/tools
    export PATH=$PATH:$ANDROID_HOME/tools/bin
    export PATH=$PATH:$ANDROID_HOME/platform-tools
    ``` 
    Replace /Library/Android/sdk by the location of the android SDK. You can find that location in You can find the actual location of the SDK in the Android Studio "Preferences" dialog, under Appearance & Behavior > System Settings > Android SDK.

For iOS development, you **WILL** need a physical Mac computer, with XCode installed. You can download XCode from the App Store. You will also need to install the Xcode Command Line Tools. Open Xcode, then choose "Preferences..." from the Xcode menu. Go to the Locations panel and install the tools by selecting the most recent version in the Command Line Tools dropdown.

Your development environment should now be all set.

### Cloning and installing the project

Under an empty folder, clone the repository
```
$ git clone https://github.com/PiPoutch/KCD
$ cd KCD
```

you should create a folder called env/ that contains a env.ts file which should contain your Fixer API key in this format:

```
export const env = {
  FIXER_API_KEY: 'xxx'
}
```

Install the project dependencies
Update npm and install global dependencies
```
# npm install -g yarn react-native-cli
```
> Note that these commands might require superuser rights to execute properly. Simply sudo su on UNIX or launch your terminal as administrator on Windows.


Then, install the project dependencies. You should run this command at the root of the project
```
$ yarn
```

### Extra steps for iOS
Install [Cocoapods](https://cocoapods.org/)  
At the root of the project, run  
```
$ cd ios/
$ pods install
```

Then, under all targets, go to General > Frameworks, Libraries, end Embedded Content, and add the following libraries  
![linker](/dev_utils/readme_assets/linker.png)  

Your project is now installed.

## Running the project

### Android
#### Running on a device (recommended)
[Activate USB debugging](https://developer.android.com/studio/debug/dev-options#enable) on your Android device.  
Make sure you have adb installed and that your device is recognized by running `adb devices` in your terminal to check for installation. You should have one and only one device listed.

run: 
```
$ react-native run-android
```
#### Running on an android emulator
Launch Android Studio, go to ![avdmanager](/dev_utils/readme_assets/avdmanager.png) AVD Manager, and create a device corresponding to what you want to run, then run the device.

Once the device has booted, run  
```
$ adb devices
```
and make sure the simulator is listed, and is the only listed device.

In your project root folder, run:
```
$ react-native run-android
```

The app will launch in the simulator

### iOS

in Xcode, select a target device simulator, and press play. If a physical device is plugged in, it should be listed at the top of the list of simulators. However, in order to install the application to a physical device, you will have to sign it, which requires you to connect to an Apple developer orga,ization, or account.

![simulator](/dev_utils/readme_assets/simulator.png)

# Troubleshooting

During development, especially after installing or updating npm packages, the metro bundler cache might have to be reset. There's a tiny script in `dev_utils/reset_metro.sh` that can be executed to reset the metro bundler and reinstall packages.