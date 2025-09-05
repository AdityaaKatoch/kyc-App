import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { Camera, CircleCheck as CheckCircle, CircleAlert as AlertCircle, RotateCcw, Eye } from 'lucide-react-native';
import BackButton from '../components/BackButton';

const livenessSteps = [
  {
    id: 1,
    instruction: 'Look straight at the camera',
    hindiInstruction: 'कैमरे की तरफ सीधे देखें',
    icon: Eye,
    completed: false
  },
  {
    id: 2,
    instruction: 'Blink your eyes slowly',
    hindiInstruction: 'अपनी आंखें धीरे-धीरे झपकाएं',
    icon: Eye,
    completed: false
  },
  {
    id: 3,
    instruction: 'Turn your head left',
    hindiInstruction: 'अपना सिर बाईं ओर घुमाएं',
    icon: RotateCcw,
    completed: false
  },
  {
    id: 4,
    instruction: 'Turn your head right',
    hindiInstruction: 'अपना सिर दाईं ओर घुमाएं',
    icon: RotateCcw,
    completed: false
  }
];

export default function LivenessCheck() {
  const [currentStep, setCurrentStep] = useState(0);
  const [steps, setSteps] = useState(livenessSteps);
  const [isCompleted, setIsCompleted] = useState(false);

  const completeCurrentStep = () => {
    const newSteps = [...steps];
    newSteps[currentStep].completed = true;
    setSteps(newSteps);

    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const resetProcess = () => {
    setCurrentStep(0);
    setIsCompleted(false);
    setSteps(livenessSteps.map(step => ({ ...step, completed: false })));
  };

  const handleContinue = () => {
    router.push('/document-upload');
  };

  return (
    <View style={styles.container}>
      <BackButton />
      
      <View style={styles.header}>
        <Text style={styles.title}>Face Verification</Text>
        <Text style={styles.subtitle}>चेहरा सत्यापन</Text>
      </View>

      <View style={styles.cameraContainer}>
        <View style={styles.cameraPlaceholder}>
          <Camera size={80} color="#666" />
          <Text style={styles.cameraText}>Camera View</Text>
        </View>
      </View>

      <View style={styles.instructionsContainer}>
        {!isCompleted ? (
          <>
            <Text style={styles.currentInstruction}>
              {steps[currentStep].instruction}
            </Text>
            <Text style={styles.currentInstructionHindi}>
              {steps[currentStep].hindiInstruction}
            </Text>
          </>
        ) : (
          <>
            <Text style={styles.completedText}>Verification Complete!</Text>
            <Text style={styles.completedTextHindi}>सत्यापन पूर्ण!</Text>
          </>
        )}
      </View>

      <View style={styles.stepsContainer}>
        {steps.map((step, index) => {
          const IconComponent = step.icon;
          return (
            <View key={step.id} style={styles.stepItem}>
              <View style={[
                styles.stepIcon,
                step.completed && styles.stepIconCompleted,
                index === currentStep && !isCompleted && styles.stepIconActive
              ]}>
                {step.completed ? (
                  <CheckCircle size={24} color="#4CAF50" />
                ) : (
                  <IconComponent 
                    size={24} 
                    color={index === currentStep && !isCompleted ? "#2196F3" : "#666"} 
                  />
                )}
              </View>
              <Text style={[
                styles.stepText,
                step.completed && styles.stepTextCompleted,
                index === currentStep && !isCompleted && styles.stepTextActive
              ]}>
                {step.instruction}
              </Text>
            </View>
          );
        })}
      </View>

      <View style={styles.buttonContainer}>
        {!isCompleted ? (
          <>
            <TouchableOpacity 
              style={styles.completeButton}
              onPress={completeCurrentStep}
            >
              <Text style={styles.completeButtonText}>Complete Step</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.resetButton}
              onPress={resetProcess}
            >
              <Text style={styles.resetButtonText}>Reset</Text>
            </TouchableOpacity>
          </>
        ) : (
          <TouchableOpacity 
            style={styles.continueButton}
            onPress={handleContinue}
          >
            <Text style={styles.continueButtonText}>Continue</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
  },
  cameraContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  cameraPlaceholder: {
    width: 250,
    height: 300,
    backgroundColor: '#e0e0e0',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#ccc',
  },
  cameraText: {
    marginTop: 10,
    fontSize: 16,
    color: '#666',
  },
  instructionsContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  currentInstruction: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
    marginBottom: 5,
  },
  currentInstructionHindi: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  completedText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4CAF50',
    textAlign: 'center',
    marginBottom: 5,
  },
  completedTextHindi: {
    fontSize: 18,
    color: '#4CAF50',
    textAlign: 'center',
  },
  stepsContainer: {
    marginBottom: 30,
  },
  stepItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  stepIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  stepIconCompleted: {
    backgroundColor: '#e8f5e8',
  },
  stepIconActive: {
    backgroundColor: '#e3f2fd',
  },
  stepText: {
    fontSize: 16,
    color: '#666',
    flex: 1,
  },
  stepTextCompleted: {
    color: '#4CAF50',
    textDecorationLine: 'line-through',
  },
  stepTextActive: {
    color: '#2196F3',
    fontWeight: '600',
  },
  buttonContainer: {
    gap: 10,
  },
  completeButton: {
    backgroundColor: '#2196F3',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  completeButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  resetButton: {
    backgroundColor: '#f44336',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  resetButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  continueButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  continueButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});