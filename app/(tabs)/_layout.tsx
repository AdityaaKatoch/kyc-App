@@ .. @@
 import { Tabs } from 'expo-router';
-import { User, MessageCircle, Settings } from 'lucide-react-native';
+import { User, MessageCircle, Settings, CircleHelp as HelpCircle } from 'lucide-react-native';

 export default function TabLayout() {
@@ .. @@
       <Tabs.Screen
         name="chatbot"
         options={{
-          title: 'Help',
+          title: 'AI Help',
           tabBarIcon: ({ size, color }) => (
             <MessageCircle size={size} color={color} />
           ),
         }}
       />
+      <Tabs.Screen
+        name="guidance"
+        options={{
+          title: 'Guide',
+          tabBarIcon: ({ size, color }) => (
+            <HelpCircle size={size} color={color} />
+          ),
+        }}
+      />
       <Tabs.Screen
         name="settings"
         options={{