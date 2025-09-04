import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { router } from 'expo-router';
import { ArrowLeft, CircleCheck as CheckCircle, Clock, FileText, Camera, Shield } from 'lucide-react-native';

const steps = [
  {
    number: 1,
    title: 'Choose Language',
    subtitle: 'भाषा चुनें',
    description: 'Select your preferred language for the app interface',
    icon: <FileText size={20} color="#2563EB" />,
    time: '30 seconds',
  },
  {
    number: 2,
    title: 'Upload Documents',
    subtitle: 'दस्तावेज़ अपलोड करें',
    description: 'Take clear photos of your Aadhaar, PAN, or other ID cards',
    icon: <Camera size={20} color="#16A34A" />,
    time: '2-3 minutes',
  },
  {
    number: 3,
    title: 'Face Verification',
    subtitle: 'चेहरा सत्यापन',
    description: 'Complete liveness check with simple face movements',
    icon: <Shield size={20} color="#F97316" />,
    time: '1-2 minutes',
  },
  {
    number: 4,
    title: 'Review & Submit',
    subtitle: 'समीक्षा और जमा करें',
    description: 'Check all details and submit for verification',
    icon: <CheckCircle size={20} color="#16A34A" />,
    time: '1 minute',
  },
];

export default function GettingStartedGuide() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <ArrowLeft size={24} color="#64748B" />
      </TouchableOpacity>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.title}>Getting Started</Text>
          <Text style={styles.subtitle}>शुरुआत करना</Text>
          <Text style={styles.description}>
            Complete your KYC in 4 simple steps
          </Text>
        </View>

        <View style={styles.timeEstimate}>
          <Clock size={20} color="#2563EB" />
          <Text style={styles.timeText}>Total Time: 5-7 minutes</Text>
        </View>

        <View style={styles.stepsContainer}>
          {steps.map((step, index) => (
            <View key={step.number} style={styles.stepCard}>
              <View style={styles.stepNumber}>
                <Text style={styles.stepNumberText}>{step.number}</Text>
              </View>
              
              <View style={styles.stepContent}>
                <View style={styles.stepHeader}>
                  {step.icon}
                  <View style={styles.stepTitles}>
                    <Text style={styles.stepTitle}>{step.title}</Text>
                    <Text style={styles.stepSubtitle}>{step.subtitle}</Text>
                  </View>
                  <Text style={styles.stepTime}>{step.time}</Text>
                </View>
                
                <Text style={styles.stepDescription}>{step.description}</Text>
              </View>

              {index < steps.length - 1 && <View style={styles.connector} />}
            </View>
          ))}
        </View>

        <View style={styles.tipsSection}>
          <Text style={styles.tipsTitle}>💡 Before You Start:</Text>
          <View style={styles.tipsList}>
            <Text style={styles.tipText}>• Keep your ID documents ready</Text>
            <Text style={styles.tipText}>• Ensure good lighting for photos</Text>
            <Text style={styles.tipText}>• Have a stable internet connection</Text>
            <Text style={styles.tipText}>• Keep your phone charged</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.startButton} onPress={() => router.push('/kyc-options')}>
          <Text style={styles.startButtonText}>Start KYC Process / शुरू करें</Text>
        </TouchableOpacity>

        <View style={styles.bottomSpace} />
      </ScrollView>
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
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  header: {
    alignItems: 'center',
    marginBottom: 32,
  },
  title: {
    fontSize: 24,
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
  timeEstimate: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EBF4FF',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 20,
    marginBottom: 32,
    gap: 8,
  },
  timeText: {
    fontSize: 14,
    color: '#2563EB',
    fontWeight: '600',
  },
  stepsContainer: {
    marginBottom: 32,
  },
  stepCard: {
    position: 'relative',
    marginBottom: 24,
  },
  stepNumber: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: 32,
    height: 32,
    backgroundColor: '#2563EB',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  stepNumberText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  stepContent: {
    backgroundColor: '#FFFFFF',
    marginLeft: 16,
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  stepHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    gap: 8,
  },
  stepTitles: {
    flex: 1,
  },
  stepTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 2,
  },
  stepSubtitle: {
    fontSize: 14,
    color: '#64748B',
  },
  stepTime: {
    fontSize: 12,
    color: '#2563EB',
    fontWeight: '600',
  },
  stepDescription: {
    fontSize: 14,
    color: '#64748B',
    lineHeight: 18,
  },
  connector: {
    position: 'absolute',
    left: 15,
    top: 32,
    width: 2,
    height: 40,
    backgroundColor: '#E2E8F0',
  },
  tipsSection: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 12,
    marginBottom: 24,
  },
  tipsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 12,
  },
  tipsList: {
    gap: 4,
  },
  tipText: {
    fontSize: 14,
    color: '#64748B',
  },
  startButton: {
    backgroundColor: '#16A34A',
    paddingVertical: 18,
    borderRadius: 12,
    alignItems: 'center',
  },
  startButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  bottomSpace: {
    height: 32,
  },
});