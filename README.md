## Idle Timeout
Some apps need to do an action when the user is idle like logging the user out of the app , mostly in banking apps and apps with sensative data, IdleTimeout is mendix native mobile widget that tracks user activity to decide if the user is idle or not , a timer is created between screen touches and resets when the user touches the screen, this widget is built to use with mendix native mobile.

## Features
- starts monitoring the user touches after first touch or interaction with the app.
- can be used on a layout page.
- works on all screens of the app when wrapped around the main content area.
- clean configureble timers.
- ability to warn the user first about the timeout.
- configurable timeout times.
- configurable timeout trigger after warning the user.
- configurable colors.
- configurable warning taxt.
- a built in warning modal.

## Usage

The widget is fully configurable for all timers ,text ,colors and events.

![config](https://github.com/hassan-alnator/mx-idletimeout-native/blob/main/README.assets/config.png?raw=true)

To use the widget on all pages of the app drag it to your layout (Ex NativePhone_FullPage) and drag the Main content placeholder inside of it.

![usage](https://github.com/hassan-alnator/mx-idletimeout-native/blob/main/README.assets/layout.png?raw=true)

This is how the user warning looks on the app.

![phone](https://github.com/hassan-alnator/mx-idletimeout-native/blob/main/README.assets/phone.PNG?raw=true)

## Issues, suggestions and feature requests
https://github.com/hassan-alnator/mx-idletimeout-native/issues

## Development and contribution
actively accepting pull requests.
