import { Tabs } from 'expo-router'
import React from 'react'

const _Layout = () => {
  return (
        <Tabs>
            <Tabs.Screen
            name="index"
            options={
                {
                    title:'Home',
                    headerShown:false
                }
            }/>
            <Tabs.Screen
            name="search"
            options={
                {
                    title:'search',
                    headerShown:false,
                }
            }/>
            <Tabs.Screen
            name="saved"
            options={
                {
                    title:'saved',
                    headerShown:false,
                }
            }/>
            <Tabs.Screen
            name="profile"
            options={
                {
                    title:'profile',
                    headerShown:false,
                }
            }/>
        </Tabs>
  )
}

export default _Layout
