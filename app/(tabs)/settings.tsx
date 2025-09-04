@@ .. @@
 import React, { useState } from 'react';
 import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Switch } from 'react-native';
-import { Globe, Volume2, Shield, CircleHelp as HelpCircle, Info, ChevronRight } from 'lucide-react-native';
+import { Globe, Volume2, Shield, CircleHelp as HelpCircle, Info, ChevronRight, TriangleAlert as AlertTriangle, Phone } from 'lucide-react-native';
+import { router } from 'expo-router';

 export default function SettingsScreen() {
 }
@@ .. @@
         <TouchableOpacity style={styles.settingRow}>
           <HelpCircle size={20} color="#64748B" />
           <Text style={styles.settingLabel}>Help Center</Text>
+          <ChevronRight size={16} color="#94A3B8" />
+        </TouchableOpacity>
+
+        <TouchableOpacity style={styles.settingRow} onPress={() => router.push('/guidance')}>
+          <HelpCircle size={20} color="#2563EB" />
+          <Text style={styles.settingLabel}>Step-by-Step Guide</Text>
+          <ChevronRight size={16} color="#94A3B8" />
+        </TouchableOpacity>

+        <TouchableOpacity style={styles.settingRow} onPress={() => router.push('/fraud-awareness')}>
+          <AlertTriangle size={20} color="#EF4444" />
+          <Text style={styles.settingLabel}>Fraud Awareness</Text>
           <ChevronRight size={16} color="#94A3B8" />
         </TouchableOpacity>

         <TouchableOpacity style={styles.settingRow}>
           <Info size={20} color="#64748B" />
           <Text style={styles.settingLabel}>About App</Text>
           <ChevronRight size={16} color="#94A3B8" />
         </TouchableOpacity>
+
+        <TouchableOpacity style={styles.settingRow} onPress={() => Linking.openURL('tel:1800-XXX-XXXX')}>
+          <Phone size={20} color="#16A34A" />
+          <Text style={styles.settingLabel}>Call Support</Text>
+          <Text style={styles.settingValue}>1800-XXX-XXXX</Text>
+        </TouchableOpacity>
       </View>