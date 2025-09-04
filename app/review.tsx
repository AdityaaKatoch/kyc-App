@@ .. @@
 import React from 'react';
 import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
 import { router } from 'expo-router';
-import { CircleCheck as CheckCircle, Shield, User, FileText, CreditCard as Edit } from 'lucide-react-native';
+import { CircleCheck as CheckCircle, Shield, User, FileText, CreditCard as Edit, CircleHelp as HelpCircle } from 'lucide-react-native';
+import BackButton from '@/components/BackButton';

 export default function ReviewScreen() {
@@ .. @@
   return (
     <ScrollView style={styles.container}>
+      <View style={styles.topBar}>
+        <BackButton />
+        <TouchableOpacity style={styles.helpButton} onPress={() => router.push('/guidance')}>
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