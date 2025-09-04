import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { router } from 'expo-router';
import { FileText, Camera, Shield, ChevronLeft, ChevronRight } from 'lucide-react-native';

const slides = [
  {
    icon: <FileText size={80} color="#2563EB" />,
    title: 'Upload Documents Easily',
    subtitle: 'दस्तावेज़ आसानी से अपलोड करें',
    description: 'Take photos of your Aadhaar, PAN, or other ID cards with simple camera guides',
  },
  {
    icon: <Camera size={80} color="#16A34A" />,
    title: 'Safe Face Verification',
    subtitle: 'सुरक्षित चेहरा सत्यापन',
    description: 'Take a quick selfie with step-by-step instructions for secure verification',
  },
  {
    icon: <Shield size={80} color="#F97316" />,
    title: 'Secure & Retry Anytime',
    subtitle: 'सुरक्षित और कभी भी दोबारा करें',
    description: 'Your data is encrypted and safe. You can retry anytime if something goes wrong',
  },
];

export default function OnboardingScreen() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      router.push('/kyc-options');
    }
  };

  const handlePrevious = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleSkip = () => {
    router.push('/kyc-options');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>

      <View style={styles.content}>
        <View style={styles.slideContainer}>
          <View style={styles.iconContainer}>
            {slides[currentSlide].icon}
          </View>
          
          <Text style={styles.title}>{slides[currentSlide].title}</Text>
          <Text style={styles.subtitle}>{slides[currentSlide].subtitle}</Text>
          <Text style={styles.description}>{slides[currentSlide].description}</Text>
        </View>

        <View style={styles.pagination}>
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                index === currentSlide ? styles.dotActive : styles.dotInactive,
              ]}
            />
          ))}
        </View>
      </View>

      <View style={styles.navigation}>
        <TouchableOpacity
          style={[styles.navButton, currentSlide === 0 && styles.navButtonDisabled]}
          onPress={handlePrevious}
          disabled={currentSlide === 0}
        >
          <ChevronLeft size={24} color={currentSlide === 0 ? '#CBD5E1' : '#64748B'} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.nextButtonText}>
            {currentSlide === slides.length - 1 ? 'Get Started' : 'Next'}
          </Text>
          <ChevronRight size={20} color="#FFFFFF" />
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
  skipButton: {
    alignSelf: 'flex-end',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  skipText: {
    fontSize: 16,
    color: '#64748B',
    fontWeight: '600',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slideContainer: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  iconContainer: {
    marginBottom: 32,
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1E293B',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#64748B',
    textAlign: 'center',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: '#64748B',
    textAlign: 'center',
    lineHeight: 24,
    maxWidth: 280,
  },
  pagination: {
    flexDirection: 'row',
    marginTop: 40,
    gap: 8,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  dotActive: {
    backgroundColor: '#2563EB',
  },
  dotInactive: {
    backgroundColor: '#CBD5E1',
  },
  navigation: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 24,
  },
  navButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  navButtonDisabled: {
    backgroundColor: '#F1F5F9',
  },
  nextButton: {
    backgroundColor: '#16A34A',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 25,
    gap: 8,
  },
  nextButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});