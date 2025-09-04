import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import { router } from 'expo-router';
import { Lock, Eye, EyeOff, Shield, ArrowLeft, CircleCheck as CheckCircle } from 'lucide-react-native';

export default function SetupPinScreen() {
  const [pin, setPin] = useState('');
  const [confirmPin, setConfirmPin] = useState('');
  const [showPin, setShowPin] = useState(false);
  const [step, setStep] = useState(1);

  const handleNext = () => {
    if (pin.length !== 4) {
      Alert.alert('Invalid PIN', 'PIN must be 4 digits');
      return;
    }
    setStep(2);
  };

  const handleConfirm = () => {
    if (pin !== confirmPin) {
      Alert.alert('PIN Mismatch', 'PINs do not match. Please try again.');
      setConfirmPin('');
      return;
    }

    Alert.alert(
      'PIN Created Successfully!',
      'Your secure PIN has been created. You can now access your KYC profile.',
      [{ text: 'Continue', onPress: () => router.replace('/(tabs)') }]
    );
  };

  const handleBack = () => {
    if (step === 2) {
      setStep(1);
      setConfirmPin('');
    } else {
      router.back();
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={handleBack}>
        <ArrowLeft size={24} color="#64748B" />
      </TouchableOpacity>

      <View style={styles.header}>
        <View style={styles.logo}>
          <Lock size={40} color="#FFFFFF" />
        </View>
        <Text style={styles.title}>
          {step === 1 ? 'Create PIN' : 'Confirm PIN'}
        </Text>
        <Text style={styles.subtitle}>
          {step === 1 ? 'पिन बनाएं' : 'पिन की पुष्टि करें'}
        </Text>
        <Text style={styles.description}>
          {step === 1 
            ? 'Create a 4-digit PIN to secure your KYC profile'
            : 'Re-enter your PIN to confirm'
          }
        </Text>
      </View>

      <View style={styles.progressContainer}>
        <View style={[styles.progressStep, step >= 1 && styles.progressStepActive]}>
          <Text style={[styles.progressText, step >= 1 && styles.progressTextActive]}>1</Text>
        </View>
        <View style={[styles.progressLine, step >= 2 && styles.progressLineActive]} />
        <View style={[styles.progressStep, step >= 2 && styles.progressStepActive]}>
          <Text style={[styles.progressText, step >= 2 && styles.progressTextActive]}>2</Text>
        </View>
      </View>

      <View style={styles.pinContainer}>
        <Text style={styles.pinLabel}>
          {step === 1 ? 'Enter 4-digit PIN' : 'Confirm your PIN'}
        </Text>
        <View style={styles.pinInputContainer}>
          <TextInput
            style={styles.pinInput}
            value={step === 1 ? pin : confirmPin}
            onChangeText={step === 1 ? setPin : setConfirmPin}
            placeholder="••••"
            placeholderTextColor="#CBD5E1"
            secureTextEntry={!showPin}
            keyboardType="numeric"
            maxLength={4}
          />
          <TouchableOpacity
            style={styles.eyeButton}
            onPress={() => setShowPin(!showPin)}
          >
            {showPin ? <EyeOff size={20} color="#64748B" /> : <Eye size={20} color="#64748B" />}
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.securityTips}>
        <Text style={styles.tipsTitle}>🔒 Security Tips:</Text>
        <Text style={styles.tipText}>• Use a unique PIN you can remember</Text>
        <Text style={styles.tipText}>• Don't share your PIN with anyone</Text>
        <Text style={styles.tipText}>• Avoid using birth dates or simple patterns</Text>
      </View>

      <TouchableOpacity
        style={[
          styles.continueButton,
          (step === 1 ? pin.length !== 4 : confirmPin.length !== 4) && styles.continueButtonDisabled
        ]}
        onPress={step === 1 ? handleNext : handleConfirm}
        disabled={step === 1 ? pin.length !== 4 : confirmPin.length !== 4}
      >
        {step === 2 && pin === confirmPin && confirmPin.length === 4 && (
          <CheckCircle size={20} color="#FFFFFF" />
        )}
        <Text style={styles.continueButtonText}>
          {step === 1 ? 'Next / आगे' : 'Create Account / खाता बनाएं'}
        </Text>
      </TouchableOpacity>
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
  logo: {
    width: 80,
    height: 80,
    backgroundColor: '#2563EB',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    shadowColor: '#2563EB',
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
    maxWidth: 280,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 32,
  },
  progressStep: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#E2E8F0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressStepActive: {
    backgroundColor: '#2563EB',
  },
  progressText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#64748B',
  },
  progressTextActive: {
    color: '#FFFFFF',
  },
  progressLine: {
    width: 40,
    height: 2,
    backgroundColor: '#E2E8F0',
    marginHorizontal: 8,
  },
  progressLineActive: {
    backgroundColor: '#2563EB',
  },
  pinContainer: {
    marginBottom: 32,
  },
  pinLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1E293B',
    marginBottom: 12,
    textAlign: 'center',
  },
  pinInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#E2E8F0',
    paddingHorizontal: 16,
  },
  pinInput: {
    flex: 1,
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1E293B',
    paddingVertical: 20,
    textAlign: 'center',
    letterSpacing: 16,
  },
  eyeButton: {
    padding: 8,
  },
  securityTips: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 12,
    marginBottom: 32,
  },
  tipsTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1E293B',
    marginBottom: 12,
  },
  tipText: {
    fontSize: 14,
    color: '#64748B',
    marginBottom: 4,
  },
  continueButton: {
    backgroundColor: '#16A34A',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 18,
    borderRadius: 12,
    gap: 8,
  },
  continueButtonDisabled: {
    backgroundColor: '#94A3B8',
  },
  continueButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});