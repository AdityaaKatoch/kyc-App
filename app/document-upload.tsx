@@ .. @@
 import React, { useState } from 'react';
 import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
 import { router } from 'expo-router';
-import { Camera, Upload, FileText, CircleCheck as CheckCircle, CircleAlert as AlertCircle, RotateCcw } from 'lucide-react-native';
+import { Camera, Upload, FileText, CircleCheck as CheckCircle, CircleAlert as AlertCircle, RotateCcw, CircleHelp as HelpCircle } from 'lucide-react-native';
+import BackButton from '@/components/BackButton';

 export default function DocumentUploadScreen() {
@@ .. @@
   return (
     <View style={styles.container}>
+      <View style={styles.topBar}>
+        <BackButton />
+        <TouchableOpacity style={styles.helpButton} onPress={() => router.push('/guidance/document-upload')}>
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