import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { Camera, CircleCheck as CheckCircle, CircleAlert as AlertCircle, RotateCcw, Eye } from 'lucide-react-native';

const livenessSteps = [
  'Look straight at camera',
  'Blink twice slowly',
  'Turn head left',
  'Turn head right',
  'Smile naturally'
];

export default function FaceAuthScreen() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [authStatus, setAuthStatus] = useState<'idle' | 'processing' | 'success' | 'failed'>('idle');
  const [matchScore, setMatchScore] = useState<number>(0);

  const handleStartCapture = () => {
    setAuthStatus('processing');
    setIsProcessing(true);
    
    // Simulate liveness detection steps
    const stepInterval = setInterval(() => {
      setCurrentStep(prev => {
        if (prev >= livenessSteps.length - 1) {
          clearInterval(stepInterval);
          // Simulate face matching
          setTimeout(() => {
            const score = Math.floor(Math.random() * 20) + 80; // 80-99% match
            setMatchScore(score);
            if (score >= 85) {
              setAuthStatus('success');
              setTimeout(() => {
                router.push('/review');
              }, 2500);
            } else {
              setAuthStatus('failed');
            }
            setIsProcessing(false);
          }, 1500);
          return prev;
        }
        return prev + 1;
      });
    }, 2000);
  };

  const handleRetry = () => {
    setCurrentStep(0);
    setAuthStatus('idle');
    setMatchScore(0);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Face Verification</Text>
        <Text style={styles.subtitle}>चेहरा सत्यापन</Text>
        <Text style={styles.description}>
          Look at the camera and follow the instructions
        </Text>
      </View>

      <View style={styles.cameraArea}>
        {authStatus === 'idle' && (
          <View style={styles.cameraFrame}>
            <View style={styles.faceCircle}>
              <Camera size={60} color="#CBD5E1" />
            </View>
            <Text style={styles.instructionText}>Position your face in the circle</Text>
          </View>
        )}

        {authStatus === 'processing' && (
          <View style={styles.cameraFrame}>
            <View style={styles.faceCircleActive}>
              <Eye size={40} color="#2563EB" />
            </View>
            <Text style={styles.instructionText}>{livenessSteps[currentStep]}</Text>
            <Text style={styles.stepCounter}>Step {currentStep + 1} of {livenessSteps.length}</Text>
          </View>
        )}

        {authStatus === 'success' && (
          <View style={styles.successContainer}>
            <CheckCircle size={80} color="#16A34A" />
            <Text style={styles.successTitle}>Face Verified! ✅</Text>
            <Text style={styles.matchText}>Match Score: {matchScore}%</Text>
            <Text style={styles.successSubtext}>Proceeding to review...</Text>
          </View>
        )}

        {authStatus === 'failed' && (
          <View style={styles.errorContainer}>
            <AlertCircle size={60} color="#EF4444" />
            <Text style={styles.errorTitle}>Verification Failed</Text>
            <Text style={styles.errorText}>
              Face match score: {matchScore}%. Please try again with better lighting.
            </Text>
            <TouchableOpacity style={styles.retryButton} onPress={handleRetry}>
              <RotateCcw size={20} color="#FFFFFF" />
              <Text style={styles.retryButtonText}>Try Again</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      {authStatus === 'idle' && (
        <TouchableOpacity style={styles.startButton} onPress={handleStartCapture}>
          <Text style={styles.startButtonText}>Start Face Verification</Text>
        </TouchableOpacity>
      )}

      <View style={styles.tips}>
        <Text style={styles.tipsTitle}>📋 Instructions:</Text>
        <Text style={styles.tipText}>• Look directly at the camera</Text>
        <Text style={styles.tipText}>• Ensure good lighting on your face</Text>
        <Text style={styles.tipText}>• Follow each instruction carefully</Text>
        <Text style={styles.tipText}>• Don't wear dark sunglasses</Text>
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
    lineHeight: 22,
  },
  cameraArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraFrame: {
    alignItems: 'center',
  },
  faceCircle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 4,
    borderColor: '#CBD5E1',
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F1F5F9',
    marginBottom: 24,
  },
  faceCircleActive: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 4,
    borderColor: '#2563EB',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EBF4FF',
    marginBottom: 24,
  },
  instructionText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1E293B',
    textAlign: 'center',
    marginBottom: 8,
  },
  stepCounter: {
    fontSize: 14,
    color: '#64748B',
  },
  successContainer: {
    alignItems: 'center',
  },
  successTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#16A34A',
    marginTop: 16,
    marginBottom: 8,
  },
  matchText: {
    fontSize: 18,
    color: '#16A34A',
    fontWeight: '600',
    marginBottom: 8,
  },
  successSubtext: {
    fontSize: 14,
    color: '#64748B',
    fontStyle: 'italic',
  },
  errorContainer: {
    alignItems: 'center',
  },
  errorTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#EF4444',
    marginTop: 16,
    marginBottom: 8,
  },
  errorText: {
    fontSize: 16,
    color: '#64748B',
    textAlign: 'center',
    marginBottom: 24,
    maxWidth: 280,
  },
  retryButton: {
    backgroundColor: '#EF4444',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    gap: 8,
  },
  retryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  startButton: {
    backgroundColor: '#16A34A',
    paddingVertical: 18,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 24,
  },
  startButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  tips: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 12,
    marginBottom: 24,
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
});