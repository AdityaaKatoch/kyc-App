import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import { router } from 'expo-router';
import { Lock, Eye, EyeOff, Shield, Smartphone, CircleHelp as HelpCircle } from 'lucide-react-native';

export default function LoginScreen() {
  const [pin, setPin] = useState('');
  const [showPin, setShowPin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    if (pin.length !== 4) {
      Alert.alert('Invalid PIN', 'Please enter a 4-digit PIN');
      return;
    }

    setIsLoading(true);
    // Simulate authentication
    setTimeout(() => {
      setIsLoading(false);
      if (pin === '1234') { // Demo PIN
        router.replace('/(tabs)');
      } else {
        Alert.alert('Incorrect PIN', 'Please try again or use forgot PIN option');
      }
    }, 1000);
  };

  const handleForgotPin = () => {
    router.push('/auth/forgot-pin');
  };

  const handleCreateAccount = () => {
    router.push('/auth/setup-pin');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logo}>
          <Shield size={40} color="#FFFFFF" />
        </View>
        <Text style={styles.title}>Secure Login</Text>
        <Text style={styles.subtitle}>सुरक्षित लॉगिन</Text>
        <Text style={styles.description}>
          Enter your 4-digit PIN to access your KYC profile
        </Text>
      </View>

      <View style={styles.pinContainer}>
        <Text style={styles.pinLabel}>Enter PIN / पिन डालें</Text>
        <View style={styles.pinInputContainer}>
          <TextInput
            style={styles.pinInput}
            value={pin}
            onChangeText={setPin}
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

        <TouchableOpacity style={styles.forgotButton} onPress={handleForgotPin}>
          <Text style={styles.forgotText}>Forgot PIN? / पिन भूल गए?</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={[styles.loginButton, isLoading && styles.loginButtonDisabled]}
        onPress={handleLogin}
        disabled={isLoading}
      >
        <Lock size={20} color="#FFFFFF" />
        <Text style={styles.loginButtonText}>
          {isLoading ? 'Verifying...' : 'Login / लॉगिन'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.createButton} onPress={handleCreateAccount}>
        <Smartphone size={20} color="#2563EB" />
        <Text style={styles.createButtonText}>Create New Account / नया खाता बनाएं</Text>
      </TouchableOpacity>

      <View style={styles.helpSection}>
        <TouchableOpacity style={styles.helpButton}>
          <HelpCircle size={16} color="#64748B" />
          <Text style={styles.helpText}>Need Help? Call: 1800-XXX-XXXX</Text>
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
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
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
    marginBottom: 16,
  },
  pinInput: {
    flex: 1,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1E293B',
    paddingVertical: 16,
    textAlign: 'center',
    letterSpacing: 8,
  },
  eyeButton: {
    padding: 8,
  },
  forgotButton: {
    alignItems: 'center',
  },
  forgotText: {
    fontSize: 14,
    color: '#2563EB',
    fontWeight: '600',
  },
  loginButton: {
    backgroundColor: '#16A34A',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 18,
    borderRadius: 12,
    marginBottom: 16,
    gap: 8,
  },
  loginButtonDisabled: {
    backgroundColor: '#94A3B8',
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  createButton: {
    backgroundColor: '#FFFFFF',
    borderColor: '#2563EB',
    borderWidth: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderRadius: 12,
    marginBottom: 32,
    gap: 8,
  },
  createButtonText: {
    color: '#2563EB',
    fontSize: 16,
    fontWeight: '600',
  },
  helpSection: {
    alignItems: 'center',
  },
  helpButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  helpText: {
    fontSize: 14,
    color: '#64748B',
  },
});