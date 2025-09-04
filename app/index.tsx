@@ .. @@
   useEffect(() => {
     // Animate logo entrance
     Animated.parallel([
       Animated.timing(fadeAnim, {
         toValue: 1,
         duration: 1000,
         useNativeDriver: true,
       }),
       Animated.spring(scaleAnim, {
         toValue: 1,
         tension: 50,
         friction: 7,
         useNativeDriver: true,
       }),
     ]).start();

     // Simulate network check and navigation
     const timer = setTimeout(() => {
       if (isOnline) {
-        router.replace('/language');
+        router.replace('/auth/login');
       } else {
         router.replace('/offline');
       }
     }, 2500);

     return () => clearTimeout(timer);
   }, [isOnline]);