import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Animated, Image } from 'react-native';
import { router } from 'expo-router';
import { Wifi, WifiOff } from 'lucide-react-native';

export default function SplashScreen() {
  const [fadeAnim] = useState(new Animated.Value(0));
  const [scaleAnim] = useState(new Animated.Value(0.5));
  const [isOnline, setIsOnline] = useState(true);

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
        router.replace('/language');
      } else {
        router.replace('/offline');
      }
    }, 2500);

    return () => clearTimeout(timer);
  }, [isOnline]);

  return (
    <View style={styles.container}>
      <Animated.View 
        style={[
          styles.logoContainer,
          {
            opacity: fadeAnim,
            transform: [{ scale: scaleAnim }],
          },
        ]}
      >
        <View style={styles.logo}>
          <Text style={styles.logoText}>🛡️</Text>
        </View>
        <Text style={styles.appName}>BharatKYC</Text>
        <Text style={styles.tagline}>Fast & Secure KYC for Everyone</Text>
      </Animated.View>

      <View style={styles.statusContainer}>
        {isOnline ? (
          <View style={styles.statusItem}>
            <Wifi size={20} color="#16A34A" />
            <Text style={styles.statusText}>Connected</Text>
          </View>
        ) : (
          <View style={styles.statusItem}>
            <WifiOff size={20} color="#EF4444" />
            <Text style={styles.statusTextOffline}>Offline Mode</Text>
          </View>
        )}
      </View>

      <View style={styles.loadingContainer}>
        <View style={styles.spinner} />
        <Text style={styles.loadingText}>Setting up your experience...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 80,
  },
  logo: {
    width: 100,
    height: 100,
    backgroundColor: '#2563EB',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    shadowColor: '#2563EB',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 8,
  },
  logoText: {
    fontSize: 48,
  },
  appName: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 8,
  },
  tagline: {
    fontSize: 16,
    color: '#64748B',
    textAlign: 'center',
    maxWidth: 280,
  },
  statusContainer: {
    position: 'absolute',
    top: 60,
    right: 24,
  },
  statusItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  statusText: {
    marginLeft: 6,
    fontSize: 12,
    color: '#16A34A',
    fontWeight: '600',
  },
  statusTextOffline: {
    marginLeft: 6,
    fontSize: 12,
    color: '#EF4444',
    fontWeight: '600',
  },
  loadingContainer: {
    position: 'absolute',
    bottom: 100,
    alignItems: 'center',
  },
  spinner: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 3,
    borderColor: '#E2E8F0',
    borderTopColor: '#2563EB',
    marginBottom: 16,
  },
  loadingText: {
    fontSize: 14,
    color: '#64748B',
  },
});