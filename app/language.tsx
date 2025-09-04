@@ .. @@
 import React, { useState } from 'react';
 import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
 import { router } from 'expo-router';
-import { Volume2, Check } from 'lucide-react-native';
+import { Volume2, Check, ArrowLeft } from 'lucide-react-native';
+import BackButton from '@/components/BackButton';

 const languages = [
   { code: 'hi', name: 'हिन्दी', english: 'Hindi' },
@@ .. @@
   return (
     <View style={styles.container}>
+      <BackButton style={styles.backButton} />
+
       <View style={styles.header}>
@@ .. @@
       </View>

-      <ScrollView style={styles.languageList} showsVerticalScrollIndicator={false}>
+      <ScrollView style={styles.languageList} showsVerticalScrollIndicator={true}>
         {languages.map((language) => (
@@ .. @@
   container: {
     flex: 1,
     backgroundColor: '#F8FAFC',
     paddingHorizontal: 24,
     paddingTop: 60,
   },
+  backButton: {
+    marginBottom: 20,
+  },
   header: {