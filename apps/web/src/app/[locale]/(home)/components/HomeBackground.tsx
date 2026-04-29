'use client'

import type { PropsWithChildren } from 'react'

import { BackgroundImageProvider } from '~/components/modules/shared/BackgroundImageProvider'
import { useAppConfigSelector } from '~/providers/root/aggregation-data-provider'

export const HomeBackground = ({ children }: PropsWithChildren) => {
  const bgConfig = useAppConfigSelector((config) => config.bg)
  const hasBg = !!bgConfig?.images?.length

  return (
    <div className={hasBg ? 'home-background' : ''}>
      {hasBg && <BackgroundImageProvider />}
      {children}
    </div>
  )
}
