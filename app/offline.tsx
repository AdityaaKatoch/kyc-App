@@ .. @@
 import React from 'react';
 import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
 import { router } from 'expo-router';
-import { WifiOff, RotateCcw, Smartphone } from 'lucide-react-native';
+import { WifiOff, RotateCcw, Smartphone, CircleHelp as HelpCircle } from 'lucide-react-native';
+import BackButton from '@/components/BackButton';

 export default function OfflineScreen() {
@@ .. @@
   return (
     <View style={styles.container}>
+      <View style={styles.topBar}>
+        <BackButton />
+        <TouchableOpacity style={styles.helpButton} onPress={() => router.push('/guidance')}>
+          <HelpCircle size={20} color="#2563EB" />
+          <Text style={styles.helpText}>Help</Text>
+        </TouchableOpacity>
+      </View>
+
       <View style={styles.iconContainer}>
@@ .. @@
   container: {
     flex: 1,
     backgroundColor: '#F8FAFC',
     paddingHorizontal: 24,
+    paddingTop: 60,
     justifyContent: 'center',
     alignItems: 'center',
   },
+  topBar: {
+    position: 'absolute',
+    top: 60,
+    left: 24,
+    right: 24,
+    flexDirection: 'row',
+    justifyContent: 'space-between',
+    alignItems: 'center',
+    zIndex: 1,
+  },
+  helpButton: {
+    flexDirection: 'row',
+    alignItems: 'center',
+    backgroundColor: '#FFFFFF',
+    paddingHorizontal: 12,
+    paddingVertical: 8,
+    borderRadius: 20,
+    gap: 4,
+  },
+  helpText: {
+    fontSize: 14,
+    color: '#2563EB',
+    fontWeight: '600',
+  },
   iconContainer: {