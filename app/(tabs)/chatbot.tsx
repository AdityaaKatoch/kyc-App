@@ .. @@
 import React, { useState } from 'react';
-import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
-import { MessageCircle, Send, Volume2, Mic, CircleHelp as HelpCircle } from 'lucide-react-native';
+import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput, Linking } from 'react-native';
+import { MessageCircle, Send, Volume2, Mic, CircleHelp as HelpCircle, Phone, TriangleAlert as AlertTriangle } from 'lucide-react-native';

 const quickQuestions = [
   'How do I upload my Aadhaar?',
   'Why is my face check failing?',
   'What documents do I need?',
   'Is my data safe?',
   'How to retry upload?',
   'What is DigiLocker?',
+  'Report fraud / धोखाधड़ी की रिपोर्ट करें',
+  'Emergency help / आपातकालीन सहायता',
 ];

 const chatMessages = [
@@ .. @@
       safe: 'Your data is completely safe! We use bank-level encryption and follow UIDAI guidelines. Your information is never shared without permission. 🔒',
       retry: 'To retry: Go back to the previous screen and try again. If network is slow, try offline mode and sync later! 🔄',
       digilocker: 'DigiLocker is a government digital wallet that stores your official documents. It\'s the fastest way to complete KYC! 🏛️',
+      fraud: 'If you suspect fraud, immediately call 1930 (Cyber Crime Helpline) or 1800-XXX-XXXX (KYC Support). Never share your PIN or OTP! 🚨',
+      emergency: 'For immediate help: Call 1800-XXX-XXXX or use the emergency button. Our support team is available 24/7! 📞',
     };

     const lowerInput = input.toLowerCase();
@@ .. @@
     if (lowerInput.includes('safe') || lowerInput.includes('secure')) return responses.safe;
     if (lowerInput.includes('retry') || lowerInput.includes('again')) return responses.retry;
     if (lowerInput.includes('digilocker')) return responses.digilocker;
+    if (lowerInput.includes('fraud') || lowerInput.includes('धोखाधड़ी')) return responses.fraud;
+    if (lowerInput.includes('emergency') || lowerInput.includes('आपातकालीन')) return responses.emergency;

     return 'I understand you need help! Can you ask me about uploading documents, face verification, or any specific KYC step? मैं आपकी मदद कर सकूंगा! 🤗';
@@ .. @@
         </View>
       </ScrollView>

+      <View style={styles.emergencyBar}>
+        <TouchableOpacity 
+          style={styles.emergencyButton} 
+          onPress={() => Linking.openURL('tel:1800-XXX-XXXX')}
+        >
+          <Phone size={16} color="#FFFFFF" />
+          <Text style={styles.emergencyText}>Emergency: 1800-XXX-XXXX</Text>
+        </TouchableOpacity>
+        
+        <TouchableOpacity 
+          style={styles.fraudButton} 
+          onPress={() => router.push('/fraud-awareness')}
+        >
+          <AlertTriangle size={16} color="#EF4444" />
+        </TouchableOpacity>
+      </View>
+
       <View style={styles.inputContainer}>
@@ .. @@
   inputContainer: {
     flexDirection: 'row',
     paddingHorizontal: 24,
     paddingVertical: 16,
     backgroundColor: '#FFFFFF',
     alignItems: 'flex-end',
     gap: 12,
   },
+  emergencyBar: {
+    flexDirection: 'row',
+    paddingHorizontal: 24,
+    paddingVertical: 8,
+    backgroundColor: '#FEF2F2',
+    alignItems: 'center',
+    gap: 8,
+  },
+  emergencyButton: {
+    flex: 1,
+    backgroundColor: '#EF4444',
+    flexDirection: 'row',
+    alignItems: 'center',
+    justifyContent: 'center',
+    paddingVertical: 8,
+    borderRadius: 16,
+    gap: 4,
+  },
+  emergencyText: {
+    color: '#FFFFFF',
+    fontSize: 12,
+    fontWeight: '600',
+  },
+  fraudButton: {
+    width: 32,
+    height: 32,
+    backgroundColor: '#FFFFFF',
+    borderRadius: 16,
+    justifyContent: 'center',
+    alignItems: 'center',
+    borderWidth: 1,
+    borderColor: '#EF4444',
+  },
   inputRow: {