@@ .. @@
 import React, { useState } from 'react';
 import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
 import { router } from 'expo-router';
-import { FileText, Camera, Shield, ChevronLeft, ChevronRight } from 'lucide-react-native';
+import { FileText, Camera, Shield, ChevronLeft, ChevronRight, CircleHelp as HelpCircle } from 'lucide-react-native';
+import BackButton from '@/components/BackButton';

 const slides = [
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
       <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
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
   skipButton: {