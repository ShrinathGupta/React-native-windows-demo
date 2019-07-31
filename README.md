# React-native-windows-demo
The intention of this repository is to show basic UWP application by using ***React Native Windows vnext***.
https://github.com/microsoft/react-native-windows/tree/master/vnext [ _Involves closer interaction between C++ and JS_ ]

***The development of the React Native Windows vnext implementation is ongoing.***

### Prerequisites
* Js editor (VS code editor)<br>
* VS 2017 or greater
* React Native Windows -vnext currently supports Windows 10 SDK >= 15063
* Install node
* Enable your machine for development [ [DeveloperMode_Settings_Reference](https://docs.microsoft.com/en-us/windows/uwp/get-started/enable-your-device-for-development)].


### Getting started
* npm `install -g react-native-cli`
* clone respository
* cd `uwp_vnext_demo/`
* `npm install`

### Run Project
*  Open `windows/uwp_vnext_demo.sln` in VS 2019. //_This might ask you to install few dependencies_
*  Select 'debug'  and `x64`from the configuration selection available next to Run.
*  Right click on solution and `Build solution`.(_This may take few minutes_)
*  Right click on solution and deploy it.
*  Go to project directory and open gitbash.
*  cd `uwp_vnext_demo`.
*  Run command 'react-native start'. //_This will start local client server on port 8081 to create JS bundle_
*  Go to search bar and type `uwp_vnext_demo`.
*  Launch the application.

### Application covers following 
    * Buttons
    * Grid View by using FlatList
    * Image 
    * Text
    * Input
    * ScrollView
    * FlatList
    * Linking module of react-native

## Contribute
   * Star - If you like it
   * Fork - If you like to build your own version
   * File an issue - If you found a bug   
   * Send a pull request - If you want to contribute
