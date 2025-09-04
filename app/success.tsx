@@ .. @@
 import React, { useEffect, useState } from 'react';
-import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
+import { View, Text, StyleSheet, TouchableOpacity, Animated, Linking } from 'react-native';
 import { router } from 'expo-router';
-import { CircleCheck as CheckCircle, Share2, Chrome as Home, Download } from 'lucide-react-native';
+import { CircleCheck as CheckCircle, Share2, Chrome as Home, Download, ExternalLink } from 'lucide-react-native';

 export default function SuccessScreen() {
@@ .. @@
   const handleReturnToPartner = () => {
     // In real app, would redirect back to partner application
-    router.push('/(tabs)');
+    const partnerUrl = 'https://example-partner-app.com/kyc-complete';
+    Linking.openURL(partnerUrl);
   };

   const handleDownloadCertificate = () => {
@@ .. @@
         <TouchableOpacity style={styles.homeButton} onPress={handleReturnToPartner}>
-          <Home size={20} color="#FFFFFF" />
-          <Text style={styles.homeButtonText}>Return to App</Text>
+          <ExternalLink size={20} color="#FFFFFF" />
+          <Text style={styles.homeButtonText}>Return to Partner App</Text>
         </TouchableOpacity>
       </View>