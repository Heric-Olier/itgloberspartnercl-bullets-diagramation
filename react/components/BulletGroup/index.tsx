import React, { PropsWithChildren } from 'react'
import { useListContext, ListContextProvider } from 'vtex.list-context'//@ts-ignore
import { BulletsSchema } from './BulletTypes'
import { BulletAsList } from './modules/BulletsAsList'
import { useCssHandles } from 'vtex.css-handles' //@ts-ignore
import { useDevice } from 'vtex.device-detector' //@ts-ignore

export interface BulletGroupProps {
  bullets: BulletsSchema
}

const BulletGroup = ({ bullets, children }: PropsWithChildren<BulletGroupProps>) => {
  const { isMobile } = useDevice();
  const { list } = useListContext() || [];

  const bulletsGroups = BulletAsList(bullets);
  const newListContextValue = list.concat(bulletsGroups)

  const CSS_HANDLES = ['bullet__container']
  const handles = useCssHandles(CSS_HANDLES)
  console.log(handles)

  return (
    <ListContextProvider list={newListContextValue}>
      {
        isMobile ?
          children
          // <div className={handles['bullet__container']}>
          //   {bulletsGroups}
          // </div>
          :
          children

      }
    </ListContextProvider>
  )
}

export default BulletGroup
