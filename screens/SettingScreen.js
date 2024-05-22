import { SafeAreaView, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import HeaderComponent from '../components/headerComponent'
import TextComponent from '../components/textComponent'
import { BellIcon, ChartPieIcon, LockClosedIcon, UsersIcon } from 'react-native-heroicons/solid'
import { ChevronRightIcon } from 'react-native-heroicons/outline'

export default function SettingScreen() {

    const [isTextMessagesEnabled, setIsTextMessagesEnabled] = useState(false);
    const [isPhoneCallsEnabled, setIsPhoneCallsEnabled] = useState(false);

    
    const accountSettings = [
        { title: 'Change Password', icon: LockClosedIcon, color: 'rgba(235, 87, 87, 1)', navigateTo: 'ChangePassword' },
        { title: 'Notifications', icon: BellIcon, color: 'rgba(33, 150, 83, 1)', navigateTo: 'Notifications' },
        { title: 'Statistics', icon: ChartPieIcon, color: 'rgba(86, 204, 242, 1)', navigateTo: 'Statistics' },
        { title: 'About Us', icon: UsersIcon, color: 'rgba(242, 153, 74, 1)', navigateTo: 'ChangePassword' },

      ];

    const toggleTextMessagesSwitch = () => setIsTextMessagesEnabled(previousState => !previousState);
    const togglePhoneCallsSwitch = () => setIsPhoneCallsEnabled(previousState => !previousState);

    const options = [
        { type: 'switch', title: 'Text messages', value: isTextMessagesEnabled, onValueChange: toggleTextMessagesSwitch },
        { type: 'switch', title: 'Phone calls', value: isPhoneCallsEnabled, onValueChange: togglePhoneCallsSwitch },
        { type: 'value', title: 'Languages', value: 'English', navigateTo: 'Languages' },
        { type: 'value', title: 'Currency', value: '$-USD', navigateTo: 'Currency' },
        { type: 'value', title: 'Linked accounts', value: 'Facebook, Google', navigateTo: 'LinkedAccounts' },
    ];

  return (
    <SafeAreaView style={styles.safeArea}>
        <HeaderComponent title="Setting"/>

        <View style={styles.accountSettingContainer}>
            <TextComponent style={styles.accountSettingTitle}>
                Account Setting
            </TextComponent>

            <View style={styles.listItemContainer}>
                {accountSettings.map((item, index) => (
                    <TouchableOpacity key={index} onPress={() => { /* handle navigation */ }}>
                        <View>
                            <View style={styles.settingItem}>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <View style={[styles.circle, {backgroundColor: item.color}]}>
                                        <item.icon size={20} color="rgba(255, 255, 255, 1)" />
                                    </View>
                                    <TextComponent style={styles.textItem}>
                                        {item.title}
                                    </TextComponent>   
                                </View>
                                <ChevronRightIcon size={22} color="gray" />
                            </View>
                            
                            <View style={styles.line}></View>
                        </View>
                        
                    </TouchableOpacity>
                ))}
            </View>
        </View>

        <View style={styles.moreOptionsContainer}>
            <TextComponent style={styles.moreOptionsTitle}>
                More Options
            </TextComponent>

            {options.map((item, index) => (
                <View key={index}>
                    <View style={styles.optionContainer}>
                        <TextComponent style={styles.optionText}>{item.title}</TextComponent>
                        {item.type === 'switch' ? (
                            <Switch
                                trackColor={{ false: '#767577', true: 'rgba(14, 190, 127, 1)' }}
                                thumbColor={'rgba(255, 255, 255, 1)'}
                                onValueChange={item.onValueChange}
                                value={item.value}
                            />
                        ) : (
                            <TouchableOpacity 
                                onPress={()=>{}}
                                style={styles.valueContainer}
                            >
                                <TextComponent style={styles.valueText}>{item.value}</TextComponent>
                                <ChevronRightIcon size={22} color="rgba(0, 0, 0, 1)" />
                            </TouchableOpacity>
                        )}
                    </View>
                    {index < options.length - 1 && <View style={styles.lineOptions} />}
                </View>
            ))}
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    safeArea:{
        flex: 1,
        paddingTop: 36,
        paddingHorizontal: 20
    },

    accountSettingContainer:{
        marginBottom: 27
    },

    accountSettingTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        lineHeight: 29.81,
        marginBottom: 10,
        color: 'rgba(103, 114, 148, 1)'
    },

    listItemContainer:{
        flexDirection: 'column'
    },

    settingItem:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 17,
    },

    circle:{ 
        width: 32, 
        height: 32,
        borderRadius: 16,
        marginRight: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },

    textItem:{
        fontSize: 16, 
        lineHeight: 18.96,
        color: 'rgba(103, 114, 148, 1)',
    },

    line: {
        width: 335,
        borderTopWidth: 1,
        borderColor: 'rgba(14, 190, 127, 1)',
        opacity: 0.06,
        marginBottom: 12,
        alignSelf: 'flex-start',
    },

    moreOptionsTitle:{
        fontSize: 16, 
        lineHeight: 26.5,
        fontWeight: 'bold',
        marginBottom: 17,
        color: 'rgba(103, 114, 148, 1)'
    },


    optionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 18
    },

    optionText: {
        fontSize: 16,
        color: 'rgba(103, 114, 148, 1)',
    },
    
    valueContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    
    valueText: {
        fontSize: 16,
        color: 'rgba(103, 114, 148, 1)',
        marginRight: 10,
    },

    lineOptions: {
        height: 1,
        backgroundColor: 'rgba(14, 190, 127, 1)',
        opacity: 0.06,
        alignSelf: 'stretch',
        marginBottom: 15
    },
})