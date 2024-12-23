import  { ImageBackground, View } from "react-native"
import { IconArrowLeft } from "@tabler/icons-react-native"

import { router } from "expo-router"

import { s } from "./styles"
import { Button } from "@/components/button"

type Props = {
  uri: string
}

export function Cover({uri}: Props) {
  return (
    <ImageBackground source={{ uri }} style={ s.container }>
      <View>
        <Button style={{ width: 40, height: 40, top: 10, left: 10}} onPress={() => router.back()}>
          <Button.Icon icon={IconArrowLeft}/>
        </Button>
      </View>
    </ImageBackground>
  )
}