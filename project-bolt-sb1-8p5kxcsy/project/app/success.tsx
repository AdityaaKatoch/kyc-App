import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { router } from 'expo-router';
import { CircleCheck as CheckCircle, Share2, Chrome as Home, Download } from 'lucide-react-native';

export default function SuccessScreen() {
  const [fadeAnim] = useState(new Animated.Value(0));
  const [scaleAnim] = useState(new Animated.Value(0.5));

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        tension: 50,
        friction: 7,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const handleShare = () => {
    // In real app, would share KYC completion certificate
    alert('Sharing KYC completion certificate...');
  };

  const handleReturnToPartner = () => {
    // In real app, would redirect back to partner application
    router.push('/(tabs)');
  };

  const handleDownloadCertificate = () => {
    alert('Downloading KYC certificate...');
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.successAnimation,
          {
            opacity: fadeAnim,
            transform: [{ scale: scaleAnim }],
          },
        ]}
      >
        <View style={styles.checkmarkContainer}>
          <CheckCircle size={100} color="#16A34A" />
          <Text style={styles.celebrationText}>🎉</Text>
        </View>
        
        <Text style={styles.successTitle}>KYC Complete!</Text>
        <Text style={styles.successSubtitle}>आपका केवाईसी पूरा हो गया!</Text>
        
        <Text style={styles.successMessage}>
          Your identity has been successfully verified. You can now access all services.
        </Text>
      </Animated.View>

      <View style={styles.detailsContainer}>
        <View style={styles.completionCard}>
          <Text style={styles.completionTitle}>Verification Summary</Text>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Document:</Text>
            <Text style={styles.summaryValue}>✅ Verified</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Face Match:</Text>
            <Text style={styles.summaryValue}>✅ 94% Match</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Status:</Text>
            <Text style={styles.summaryValue}>✅ Approved</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Valid Until:</Text>
            <Text style={styles.summaryValue}>365 days</Text>
          </View>
        </View>
      </View>

      <View style={styles.actionButtons}>
        <TouchableOpacity style={styles.downloadButton} onPress={handleDownloadCertificate}>
          <Download size={20} color="#2563EB" />
          <Text style={styles.downloadButtonText}>Download Certificate</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.shareButton} onPress={handleShare}>
          <Share2 size={20} color="#FFFFFF" />
          <Text style={styles.shareButtonText}>Share Completion</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.homeButton} onPress={handleReturnToPartner}>
          <Home size={20} color="#FFFFFF" />
          <Text style={styles.homeButtonText}>Return to App</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    paddingHorizontal: 24,
    paddingTop: 60,
  },
  successAnimation: {
    alignItems: 'center',
    marginBottom: 40,
  },
  checkmarkContainer: {
    position: 'relative',
    marginBottom: 24,
  },
  celebrationText: {
    fontSize: 32,
    position: 'absolute',
    top: -16,
    right: -16,
  },
  successTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#16A34A',
    marginBottom: 8,
  },
  successSubtitle: {
    fontSize: 20,
    color: '#15803D',
    marginBottom: 16,
  },
  successMessage: {
    fontSize: 16,
    color: '#64748B',
    textAlign: 'center',
    lineHeight: 24,
    maxWidth: 300,
  },
  detailsContainer: {
    marginBottom: 32,
  },
  completionCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  completionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 16,
    textAlign: 'center',
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },
  summaryLabel: {
    fontSize: 14,
    color: '#64748B',
  },
  summaryValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1E293B',
  },
  actionButtons: {
    gap: 16,
    marginBottom: 32,
  },
  downloadButton: {
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
  downloadButtonText: {
    color: '#2563EB',
    fontSize: 16,
    fontWeight: '600',
  },
  shareButton: {
    backgroundColor: '#F97316',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderRadius: 12,
    gap: 8,
  },
  shareButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  homeButton: {
    backgroundColor: '#2563EB',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 18,
    borderRadius: 12,
    gap: 8,
  },
  homeButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});