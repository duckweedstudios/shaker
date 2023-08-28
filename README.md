# shaker
A bartending quick-reference and mixology education mobile app made with Solito

DO NOT DELETE THIS BRANCH/FORK! Important information on why attempts at using the Solito tech stack failed is available in the commit description here https://github.com/duckweedstudios/shaker/commit/20f1ff79f6a784fe829bfec119cd4bd80e88835b

Repeated here:

>I did my best to achieve parity between the with-expo-router template this started on and the with-tailwind template available for Solito.
>
>Seemingly, this mostly worked, but critically RN components like <View> do not work with Tailwind classes on the web platform.
>
>In searching for a fix I found [marklawlor/nativewind#470](https://github.com/marklawlor/nativewind/issues/470) which has a purported fix in the replies. I could not find where to add this code in the monorepo to get it to work.
>
>More importantly, development using Solito may not be feasible on non-macOS. Developing a build (prerequisite to running `yarn native`) requires macOS, and the cloud option EAS requires the Apple Developer subscription to build.
>
>Overall while this tech stack has promise I think it is currently incompatible with our needs. This may change in the future but for now developing with a basic RN project with Expo Go is preferable.