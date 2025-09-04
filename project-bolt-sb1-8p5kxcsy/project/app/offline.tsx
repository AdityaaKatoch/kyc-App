import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { WifiOff, RotateCcw, Smartphone } from 'lucide-react-native';

export default function OfflineScreen() {
  const handleRetry = () => {
    // Simulate network check
    router.replace('/');
  };

  const handleOfflineMode = () => {
    router.push('/language');
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <WifiOff size={80} color="#64748B" />
      </View>

      <Text style={styles.title}>No Internet Connection</Text>
      <Text style={styles.description}>
        Don't worry! You can still complete your KYC process and we'll sync your data when you're back online.
      </Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.retryButton} onPress={handleRetry}>
          <RotateCcw size={20} color="#FFFFFF" />
          <Text style={styles.retryButtonText}>Retry Connection</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.offlineButton} onPress={handleOfflineMode}>
          <Smartphone size={20} color="#2563EB" />
          <Text style={styles.offlineButtonText}>Continue in Offline Mode</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.featuresList}>
        <Text style={styles.featuresTitle}>What you can do offline:</Text>
        <View style={styles.featureItem}>
          <Text style={styles.featureDot}>•</Text>
          <Text style={styles.featureText}>Upload documents</Text>
        </View>
        <View style={styles.featureItem}>
          <Text style={styles.featureDot}>•</Text>
          <Text style={styles.featureText}>Take selfie photos</Text>
        </View>
        <View style={styles.featureItem}>
          <Text style={styles.featureDot}>•</Text>
          <Text style={styles.featureText}>Auto-sync when online</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    marginBottom: 32,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1E293B',
    textAlign: 'center',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: '#64748B',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 40,
    maxWidth: 300,
  },
  buttonContainer: {
    width: '100%',
    gap: 16,
    marginBottom: 40,
  },
  retryButton: {
    backgroundColor: '#2563EB',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderRadius: 12,
    gap: 8,
  },
  retryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  offlineButton: {
    backgroundColor: '#FFFFFF',
    borderColor: '#2563EB',
    borderWidth: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderRadius: 12,
    gap: 8,
  },
  offlineButtonText: {
    color: '#2563EB',
    fontSize: 16,
    fontWeight: '600',
  },
  featuresList: {
    alignItems: 'flex-start',
  },
  featuresTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 12,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  featureDot: {
    fontSize: 16,
    color: '#16A34A',
    marginRight: 8,
    fontWeight: 'bold',
  },
  featureText: {
    fontSize: 14,
    color: '#64748B',
  },
});