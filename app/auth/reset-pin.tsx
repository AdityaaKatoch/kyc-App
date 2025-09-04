import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import { router } from 'expo-router';
import { Lock, Eye, EyeOff, Shield, ArrowLeft, CircleCheck as CheckCircle } from 'lucide-react-native';

export default function ResetPinScreen() {
  const [newPin, setNewPin] = useState('');
  const [confirmPin, setConfirmPin] = useState('');
  const [showPin, setShowPin] = useState(false);
  const [step, setStep] = useState(1);

  const handleNext = () => {
    if (newPin.length !== 4) {
      Alert.alert('Invalid PIN', 'PIN must be 4 digits');
      return;
    }
    setStep(2);
  };

  const handleConfirm = () => {
    if (newPin !== confirmPin) {
      Alert.alert('PIN Mismatch', 'PINs do not match. Please try again.');
      setConfirmPin('');
      return;
    }

    Alert.alert(
      'PIN Reset Successfully!',
      'Your PIN has been updated. You can now login with your new PIN.',
      [{ text: 'Login', onPress: () => router.replace('/auth/login') }]
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
          {step === 1 ? 'New PIN' : 'Confirm New PIN'}
        </Text>
        <Text style={styles.subtitle}>
          {step === 1 ? 'नया पिन' : 'नए पिन की पुष्टि करें'}
        </Text>
        <Text style={styles.description}>
          {step === 1 
            ? 'Create a new 4-digit PIN for your account'
            : 'Re-enter your new PIN to confirm'
          }
        </Text>
      </View>

      <View style={styles.pinContainer}>
        <Text style={styles.pinLabel}>
          {step === 1 ? 'Enter new PIN' : 'Confirm new PIN'}
        </Text>
        <View style={styles.pinInputContainer}>
          <TextInput
            style={styles.pinInput}
            value={step === 1 ? newPin : confirmPin}
            onChangeText={step === 1 ? setNewPin : setConfirmPin}
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

      <TouchableOpacity
        style={[
          styles.continueButton,
          (step === 1 ? newPin.length !== 4 : confirmPin.length !== 4) && styles.continueButtonDisabled
        ]}
        onPress={step === 1 ? handleNext : handleConfirm}
        disabled={step === 1 ? newPin.length !== 4 : confirmPin.length !== 4}
      >
        {step === 2 && newPin === confirmPin && confirmPin.length === 4 && (
          <CheckCircle size={20} color="#FFFFFF" />
        )}
        <Text style={styles.continueButtonText}>
          {step === 1 ? 'Next / आगे' : 'Reset PIN / पिन रीसेट करें'}
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
  continueButton: {
    backgroundColor: '#16A34A',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 18,
    borderRadius: 12',
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