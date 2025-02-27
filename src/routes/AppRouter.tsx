import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '@screens/Home';
import { GraduationCap, HomeIcon, SearchIcon, ShoppingCart } from 'lucide-react-native';
import { Theme } from '../types/theme';
import Search from '@screens/Search';
import Shopping from '@screens/Shopping';
import Course from '@screens/Courses';
import { useState } from 'react';
import { View } from 'react-native';

const Tab = createBottomTabNavigator();

function HomeTab() {
    return(
        <Tab.Navigator
        screenOptions={
            {
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: Theme.colors.background,
                    height: 100,
                    paddingTop: 10
                },
            }
        }
        >
            <Tab.Screen name="Home" component={Home} 
                options={
                    {
                        tabBarIcon({size, color, focused}) {
                           
                            return (
                                <View style={{
                                    backgroundColor: focused ? '#fff' : '#000',
                                    padding: 10,
                                    paddingTop: 5,
                                    borderRadius: 100,
                                    width: 50,
                                    height: 50,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginTop: 20
                                }}>
                                    <HomeIcon size={25}  color={focused ? '#000' : '#aea3a3'}/>
                                </View>
                            )
                        },
                        
                        tabBarAccessibilityLabel: 'Tela home, botão',
                        
                    }
                }
            />
            <Tab.Screen name="Search" component={Search} 
                options={
                    {
                        tabBarIcon({size, color, focused}) {
                            return (
                                <View style={{
                                    backgroundColor: focused ? '#fff' : '#000',
                                    padding: 10,
                                    paddingTop: 5,
                                    borderRadius: 100,
                                    width: 50,
                                    height: 50,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginTop: 20
                                }}>
                                    <SearchIcon size={25}  color={focused ? '#000' : '#aea3a3'}/>
                                </View>
                            )
                        },
                        
                        tabBarAccessibilityLabel: 'Tela Search, botão',
                        
                    }
                }
            />

            <Tab.Screen name="Shopping" component={Shopping} 
                options={
                    {
                        tabBarIcon({size, color, focused}) {
                            return (
                                <View style={{
                                    backgroundColor: focused ? '#fff' : '#000',
                                    padding: 10,
                                    paddingTop: 5,
                                    borderRadius: 100,
                                    width: 50,
                                    height: 50,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginTop: 20
                                }}>
                                    <ShoppingCart size={25}  color={focused ? '#000' : '#aea3a3'}/>
                                </View>
                            )
                        },
                        
                        tabBarAccessibilityLabel: 'Tela Shopping, botão',
                        tabBarLabel: "Compras"
                    }
                }
            />

            <Tab.Screen name="Course" component={Course} 
                options={
                    {
                        tabBarIcon({size, color, focused}) {
                            return (
                                <View style={{
                                    backgroundColor: focused ? '#fff' : '#000',
                                    padding: 10,
                                    paddingTop: 5,
                                    borderRadius: 100,
                                    width: 50,
                                    height: 50,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginTop: 20
                                }}>
                                    <GraduationCap size={29}  color={focused ? '#000' : '#aea3a3'}/>
                                </View>
                            )
                        },
                        
                        tabBarAccessibilityLabel: 'Tela Course, botão',
                        tabBarLabel: "Cursos"
                    }
                }
            />
        </Tab.Navigator>
    )
}
export default HomeTab;