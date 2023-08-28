import { View } from 'react-native'
import { TextLink } from 'solito/link'
import { MotiLink } from 'solito/moti'

import { Row } from 'app/design/layout'
import { Text } from 'app/design/typography'

export function HomeScreen() {

  return (
    <View className='flex justify-center items-center p-7 min-h-screen bg-red-500'>
      <View className='m-auto'>
        <h1 className='text-4xl font-bold text-center my-16'>Welcome to Solito.</h1>
        <View className='max-w-xl max-h-xl'>
          <p className='text-center mx-24 mb-6'>
            Here is a basic starter to show you how you can navigate from one
            screen to another. This screen uses the same code on Next.js and React
            Native.
          </p>
          <p className='text-center mb-6'>
            Solito is made by{' '}
            <a
              href="https://twitter.com/fernandotherojo"
              // @ts-expect-error react-native-web only types
              hrefAttrs={{
                target: '_blank',
                rel: 'noreferrer',
              }}
              className='text-blue-500'
            >
              Fernando Rojo
            </a>
            .
          </p>
        </View>
        <View className='h-[32px]' />
        <Row className="space-x-8 justify-center">
          <TextLink
            href="/user/fernando"
            textProps={{
              style: ({ fontSize: 16, fontWeight: 'bold', color: 'blue' }),
            }}
          >
            Regular Link
          </TextLink>
          <View className='w-32' />
          <MotiLink
            href="/user/fernando"
            animate={({ hovered, pressed }) => {
              'worklet'

              return {
                scale: pressed ? 0.95 : hovered ? 1.1 : 1,
                rotateZ: pressed ? '0deg' : hovered ? '-3deg' : '0deg',
              }
            }}
            from={{
              scale: 0,
              rotateZ: '0deg',
            }}
            transition={{
              type: 'timing',
              duration: 150,
            }}
          >
            <Text
              selectable={false}
              className='text-base font-bold hover:underline text-blue-500'
              // {{ fontSize: 16, color: 'black', fontWeight: 'bold' }}
            >
              Moti Link
            </Text>
          </MotiLink>
        </Row>
      </View>
    </View>
  )
}
