@@ .. @@
       <Stack screenOptions={{ headerShown: false }}>
         <Stack.Screen name="index" />
         <Stack.Screen name="offline" />
+        <Stack.Screen name="auth/login" />
+        <Stack.Screen name="auth/setup-pin" />
+        <Stack.Screen name="auth/forgot-pin" />
+        <Stack.Screen name="auth/reset-pin" />
         <Stack.Screen name="language" />
         <Stack.Screen name="onboarding" />
         <Stack.Screen name="kyc-options" />
         <Stack.Screen name="document-upload" />
         <Stack.Screen name="face-auth" />
         <Stack.Screen name="review" />
         <Stack.Screen name="success" />
+        <Stack.Screen name="fraud-awareness" />
+        <Stack.Screen name="guidance/index" />
+        <Stack.Screen name="guidance/getting-started" />
+        <Stack.Screen name="guidance/document-upload" />
+        <Stack.Screen name="guidance/face-verification" />
+        <Stack.Screen name="guidance/security-tips" />
         <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
         <Stack.Screen name="+not-found" />
       </Stack>