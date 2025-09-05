import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { Smartphone, Upload, Star, Shield } from 'lucide-react-native';
import BackButton from '../components/BackButton';

export default function KYCOptionsScreen() {
  const handleOptionPress = (option) => {
    switch (option) {
      case 'mobile':
        router.push('/kyc/mobile-verification');
        break;
      case 'document':
        router.push('/kyc/document-upload');
        break;
      case 'video':
        router.push('/kyc/video-verification');
        break;
      case 'biometric':
        router.push('/kyc/biometric-verification');
        break;
    }
  };

  return (
    <View style={styles.container}>
      <BackButton />
      
      <View style={styles.header}>
        <Text style={styles.title}>Choose KYC Method</Text>
        <Text style={styles.subtitle}>केवाईसी की विधि चुनें</Text>
      </View>

      <View style={styles.optionsContainer}>
        <TouchableOpacity 
          style={styles.optionCard}
          onPress={() => handleOptionPress('mobile')}
        >
          <View style={styles.iconContainer}>
            <Smartphone size={32} color="#007AFF" />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.optionTitle}>Mobile Verification</Text>
            <Text style={styles.optionSubtitle}>मोबाइल सत्यापन</Text>
            <Text style={styles.optionDescription}>
              Verify using your mobile number and OTP
            </Text>
          </View>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>Quick</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.optionCard}
          onPress={() => handleOptionPress('document')}
        >
          <View style={styles.iconContainer}>
            <Upload size={32} color="#007AFF" />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.optionTitle}>Document Upload</Text>
            <Text style={styles.optionSubtitle}>दस्तावेज़ अपलोड</Text>
            <Text style={styles.optionDescription}>
              Upload Aadhaar, PAN, or other documents
            </Text>
          </View>
          <View style={[styles.badge, styles.popularBadge]}>
            <Star size={12} color="#FFF" />
            <Text style={styles.badgeText}>Popular</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.optionCard}
          onPress={() => handleOptionPress('video')}
        >
          <View style={styles.iconContainer}>
            <Shield size={32} color="#007AFF" />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.optionTitle}>Video Verification</Text>
            <Text style={styles.optionSubtitle}>वीडियो सत्यापन</Text>
            <Text style={styles.optionDescription}>
              Live video call with verification agent
            </Text>
          </View>
          <View style={[styles.badge, styles.secureBadge]}>
            <Text style={styles.badgeText}>Secure</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          All methods are secure and comply with RBI guidelines
        </Text>
        <Text style={styles.footerSubtext}>
          सभी विधियां सुरक्षित हैं और आरबीआई दिशानिर्देशों का पालन करती हैं
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  header: {
    marginBottom: 30,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1A1A1A',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    fontWeight: '500',
  },
  optionsContainer: {
    flex: 1,
    gap: 16,
  },
  optionCard: {
    backgroundColor: '#FFF',
    borderRadius: 16,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#F0F8FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  optionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1A1A1A',
    marginBottom: 4,
  },
  optionSubtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 6,
  },
  optionDescription: {
    fontSize: 13,
    color: '#888',
    lineHeight: 18,
  },
  badge: {
    backgroundColor: '#E3F2FD',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  popularBadge: {
    backgroundColor: '#FF6B35',
  },
  secureBadge: {
    backgroundColor: '#4CAF50',
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#007AFF',
  },
  footer: {
    paddingVertical: 20,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 4,
  },
  footerSubtext: {
    fontSize: 12,
    color: '#888',
    textAlign: 'center',
  },
});