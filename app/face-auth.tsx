@@ .. @@
 import React, { useState, useEffect } from 'react';
 import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
 import { router } from 'expo-router';
-import { Camera, CircleCheck as CheckCircle, CircleAlert as AlertCircle, RotateCcw, Eye } from 'lucide-react-native';
+import { Camera, CircleCheck as CheckCircle, CircleAlert as AlertCircle, RotateCcw, Eye, CircleHelp as HelpCircle } from 'lucide-react-native';
+import BackButton from '@/components/BackButton';

 const livenessSteps = [
@@ .. @@
   return (
     <View style={styles.container}>
+      <View style={styles.topBar}>
+        <BackButton />
+        <TouchableOpacity style={styles.helpButton} onPress={() => router.push('/guidance/face-verification')}>
+          <HelpCircle size={20} color="#2563EB" />
+          <Text style={styles.helpText}>Help</Text>
+        </TouchableOpacity>
+      </View>
+
       <View style={styles.header}>
@@ .. @@
   container: {
     flex: 1,
     backgroundColor: '#F8FAFC',
     paddingHorizontal: 24,
     paddingTop: 60,
   },
+  topBar: {
+    flexDirection: 'row',
+    justifyContent: 'space-between',
+    alignItems: 'center',
+    marginBottom: 20,
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
   header: {