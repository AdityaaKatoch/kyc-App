import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import { router } from 'expo-router';
import { ArrowLeft, Smartphone, Mail, MessageSquare, Shield } from 'lucide-react-native';

export default function ForgotPinScreen() {
  const [method, setMethod] = useState<'phone' | 'email' | null>(null);
  const [contact, setContact] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState(1);

  const handleSendOTP = () => {
    if (!contact.trim()) {
      Alert.alert('Required', 'Please enter your phone number or email');
      return;
    }
    setStep(2);
    Alert.alert('OTP Sent', `Verification code sent to ${contact}`);
  };

  const handleVerifyOTP = () => {
    if (otp.length !== 6) {
      Alert.alert('Invalid OTP', 'Please enter the 6-digit code');
      return;
    }
    router.push('/auth/reset-pin');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <ArrowLeft size={24} color="#64748B" />
      </TouchableOpacity>

      <View style={styles.header}>
        <View style={styles.logo}>
          <Shield size={40} color="#FFFFFF" />
        </View>
        <Text style={styles.title}>Reset PIN</Text>
        <Text style={styles.subtitle}>पिन रीसेट करें</Text>
        <Text style={styles.description}>
          {step === 1 
            ? 'Choose how you want to receive the verification code'
            : 'Enter the 6-digit code sent to your device'
          }
        </Text>
      </View>

      {step === 1 && (
        <>
          <View style={styles.methodContainer}>
            <Text style={styles.methodTitle}>Recovery Method / रिकवरी विधि</Text>
            
            <TouchableOpacity
              style={[styles.methodOption, method === 'phone' && styles.methodOptionSelected]}
              onPress={() => setMethod('phone')}
            >
              <Smartphone size={24} color={method === 'phone' ? '#2563EB' : '#64748B'} />
              <View style={styles.methodContent}>
                <Text style={styles.methodLabel}>Phone Number</Text>
                <Text style={styles.methodSubtext}>Get OTP via SMS</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.methodOption, method === 'email' && styles.methodOptionSelected]}
              onPress={() => setMethod('email')}
            >
              <Mail size={24} color={method === 'email' ? '#2563EB' : '#64748B'} />
              <View style={styles.methodContent}>
                <Text style={styles.methodLabel}>Email Address</Text>
                <Text style={styles.methodSubtext}>Get OTP via Email</Text>
              </View>
            </TouchableOpacity>
          </View>

          {method && (
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>
                {method === 'phone' ? 'Phone Number' : 'Email Address'}
              </Text>
              <TextInput
                style={styles.input}
                value={contact}
                onChangeText={setContact}
                placeholder={method === 'phone' ? '+91 XXXXX XXXXX' : 'your@email.com'}
                placeholderTextColor="#CBD5E1"
                keyboardType={method === 'phone' ? 'phone-pad' : 'email-address'}
              />
            </View>
          )}

          <TouchableOpacity
            style={[styles.sendButton, !method && styles.sendButtonDisabled]}
            onPress={handleSendOTP}
            disabled={!method}
          >
            <MessageSquare size={20} color="#FFFFFF" />
            <Text style={styles.sendButtonText}>Send OTP / ओटीपी भेजें</Text>
          </TouchableOpacity>
        </>
      )}

      {step === 2 && (
        <>
          <View style={styles.otpContainer}>
            <Text style={styles.otpLabel}>Enter OTP / ओटीपी डालें</Text>
            <TextInput
              style={styles.otpInput}
              value={otp}
              onChangeText={setOtp}
              placeholder="••••••"
              placeholderTextColor="#CBD5E1"
              keyboardType="numeric"
              maxLength={6}
            />
            
            <TouchableOpacity style={styles.resendButton}>
              <Text style={styles.resendText}>Resend OTP / दोबारा भेजें</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={[styles.verifyButton, otp.length !== 6 && styles.verifyButtonDisabled]}
            onPress={handleVerifyOTP}
            disabled={otp.length !== 6}
          >
            <Text style={styles.verifyButtonText}>Verify & Continue</Text>
          </TouchableOpacity>
        </>
      )}
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
    marginBottom: 40,
  },
  logo: {
    width: 80,
    height: 80,
    backgroundColor: '#EF4444',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    shadowColor: '#EF4444',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 8,
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
    maxWidth: 300,
  },
  methodContainer: {
    marginBottom: 32,
  },
  methodTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1E293B',
    marginBottom: 16,
    textAlign: 'center',
  },
  methodOption: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#E2E8F0',
    marginBottom: 12,
    gap: 12,
  },
  methodOptionSelected: {
    borderColor: '#2563EB',
    backgroundColor: '#EBF4FF',
  },
  methodContent: {
    flex: 1,
  },
  methodLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1E293B',
    marginBottom: 2,
  },
  methodSubtext: {
    fontSize: 14,
    color: '#64748B',
  },
  inputContainer: {
    marginBottom: 32,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1E293B',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#E2E8F0',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 16,
    fontSize: 16,
    color: '#1E293B',
  },
  otpContainer: {
    alignItems: 'center',
    marginBottom: 32,
  },
  otpLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1E293B',
    marginBottom: 16,
  },
  otpInput: {
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#E2E8F0',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 20,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1E293B',
    textAlign: 'center',
    letterSpacing: 8,
    width: 200,
    marginBottom: 16,
  },
  resendButton: {
    padding: 8,
  },
  resendText: {
    fontSize: 14,
    color: '#2563EB',
    fontWeight: '600',
  },
  sendButton: {
    backgroundColor: '#2563EB',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 18,
    borderRadius: 12,
    gap: 8,
  },
  sendButtonDisabled: {
    backgroundColor: '#94A3B8',
  },
  sendButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  verifyButton: {
    backgroundColor: '#16A34A',
    paddingVertical: 18,
    borderRadius: 12,
    alignItems: 'center',
  },
  verifyButtonDisabled: {
    backgroundColor: '#94A3B8',
  },
  verifyButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});