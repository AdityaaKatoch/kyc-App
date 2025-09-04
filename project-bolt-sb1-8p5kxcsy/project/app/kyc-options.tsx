import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { Smartphone, Upload, Star, Shield } from 'lucide-react-native';

export default function KYCOptionsScreen() {
  const handleDigiLocker = () => {
    // In real app, would integrate with DigiLocker API
    router.push('/document-upload');
  };

  const handleManualUpload = () => {
    router.push('/document-upload');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Choose KYC Method</Text>
        <Text style={styles.subtitle}>केवाईसी की विधि चुनें</Text>
        <Text style={styles.description}>
          Select how you'd like to verify your identity
        </Text>
      </View>

      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.recommendedOption} onPress={handleDigiLocker}>
          <View style={styles.recommendedBadge}>
            <Star size={16} color="#FFFFFF" />
            <Text style={styles.recommendedText}>RECOMMENDED</Text>
          </View>
          
          <View style={styles.optionContent}>
            <View style={styles.iconContainer}>
              <Smartphone size={48} color="#2563EB" />
            </View>
            <Text style={styles.optionTitle}>Use DigiLocker</Text>
            <Text style={styles.optionSubtitle}>डिजिलॉकर का उपयोग करें</Text>
            <Text style={styles.optionDescription}>
              Instantly fetch your Aadhaar, PAN, DL & Voter ID from government database
            </Text>
          </View>

          <View style={styles.benefits}>
            <View style={styles.benefit}>
              <Shield size={16} color="#16A34A" />
              <Text style={styles.benefitText}>Government Verified</Text>
            </View>
            <View style={styles.benefit}>
              <Shield size={16} color="#16A34A" />
              <Text style={styles.benefitText}>Instant Process</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.alternativeOption} onPress={handleManualUpload}>
          <View style={styles.optionContent}>
            <View style={styles.iconContainer}>
              <Upload size={48} color="#64748B" />
            </View>
            <Text style={styles.optionTitle}>Upload Documents</Text>
            <Text style={styles.optionSubtitle}>दस्तावेज़ अपलोड करें</Text>
            <Text style={styles.optionDescription}>
              Take photos of your documents manually
            </Text>
          </View>

          <View style={styles.benefits}>
            <View style={styles.benefit}>
              <Shield size={16} color="#64748B" />
              <Text style={styles.benefitText}>Works Offline</Text>
            </View>
            <View style={styles.benefit}>
              <Shield size={16} color="#64748B" />
              <Text style={styles.benefitText}>Any Document</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.trustBadges}>
        <View style={styles.trustBadge}>
          <Shield size={20} color="#16A34A" />
          <Text style={styles.trustText}>Bank-level Security</Text>
        </View>
        <View style={styles.trustBadge}>
          <Shield size={20} color="#16A34A" />
          <Text style={styles.trustText}>UIDAI Approved</Text>
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
    paddingTop: 60,
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: '#64748B',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: '#64748B',
    textAlign: 'center',
  },
  optionsContainer: {
    flex: 1,
    gap: 20,
  },
  recommendedOption: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 24,
    shadowColor: '#2563EB',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 16,
    elevation: 8,
    borderWidth: 2,
    borderColor: '#E1E7FF',
    position: 'relative',
  },
  recommendedBadge: {
    position: 'absolute',
    top: -10,
    right: 16,
    backgroundColor: '#F97316',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    gap: 4,
  },
  recommendedText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  alternativeOption: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  optionContent: {
    alignItems: 'center',
    marginBottom: 20,
  },
  iconContainer: {
    marginBottom: 16,
  },
  optionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 4,
  },
  optionSubtitle: {
    fontSize: 16,
    color: '#64748B',
    marginBottom: 12,
  },
  optionDescription: {
    fontSize: 14,
    color: '#64748B',
    textAlign: 'center',
    lineHeight: 20,
  },
  benefits: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  benefit: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  benefitText: {
    fontSize: 12,
    color: '#64748B',
    fontWeight: '600',
  },
  trustBadges: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
    marginBottom: 24,
  },
  trustBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  trustText: {
    fontSize: 14,
    color: '#16A34A',
    fontWeight: '600',
  },
});