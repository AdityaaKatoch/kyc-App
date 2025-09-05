import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { router } from 'expo-router';
import { Camera, Upload, FileText, CircleCheck as CheckCircle, CircleAlert as AlertCircle, RotateCcw } from 'lucide-react-native';
import BackButton from '../components/BackButton';

export default function DocumentUploadScreen() {
  const [uploadStatus, setUploadStatus] = useState('idle'); // 'idle', 'uploading', 'success', 'error'

  const handleCameraUpload = () => {
    Alert.alert(
      'Camera Upload',
      'This will open the camera to take a photo of your document.',
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Open Camera', 
          onPress: () => {
            setUploadStatus('uploading');
            // Simulate upload process
            setTimeout(() => {
              setUploadStatus('success');
            }, 2000);
          }
        }
      ]
    );
  };

  const handleFileUpload = () => {
    Alert.alert(
      'File Upload',
      'This will open the file picker to select a document.',
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Select File', 
          onPress: () => {
            setUploadStatus('uploading');
            // Simulate upload process
            setTimeout(() => {
              setUploadStatus('success');
            }, 2000);
          }
        }
      ]
    );
  };

  const handleRetry = () => {
    setUploadStatus('idle');
  };

  const handleContinue = () => {
    router.push('/verification-status');
  };

  const renderUploadOptions = () => (
    <>
      <TouchableOpacity style={styles.uploadOption} onPress={handleCameraUpload}>
        <Camera size={32} color="#007AFF" />
        <View style={styles.optionText}>
          <Text style={styles.optionTitle}>Take Photo</Text>
          <Text style={styles.optionSubtitle}>फोटो लें</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.uploadOption} onPress={handleFileUpload}>
        <Upload size={32} color="#007AFF" />
        <View style={styles.optionText}>
          <Text style={styles.optionTitle}>Upload File</Text>
          <Text style={styles.optionSubtitle}>फाइल अपलोड करें</Text>
        </View>
      </TouchableOpacity>
    </>
  );

  const renderUploadStatus = () => {
    switch (uploadStatus) {
      case 'uploading':
        return (
          <View style={styles.statusContainer}>
            <FileText size={48} color="#007AFF" />
            <Text style={styles.statusTitle}>Uploading...</Text>
            <Text style={styles.statusSubtitle}>अपलोड हो रहा है...</Text>
          </View>
        );
      
      case 'success':
        return (
          <View style={styles.statusContainer}>
            <CheckCircle size={48} color="#34C759" />
            <Text style={[styles.statusTitle, { color: '#34C759' }]}>Upload Successful!</Text>
            <Text style={styles.statusSubtitle}>अपलोड सफल!</Text>
            <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
              <Text style={styles.continueButtonText}>Continue</Text>
            </TouchableOpacity>
          </View>
        );
      
      case 'error':
        return (
          <View style={styles.statusContainer}>
            <AlertCircle size={48} color="#FF3B30" />
            <Text style={[styles.statusTitle, { color: '#FF3B30' }]}>Upload Failed</Text>
            <Text style={styles.statusSubtitle}>अपलोड असफल</Text>
            <TouchableOpacity style={styles.retryButton} onPress={handleRetry}>
              <RotateCcw size={20} color="#007AFF" />
              <Text style={styles.retryButtonText}>Try Again</Text>
            </TouchableOpacity>
          </View>
        );
      
      default:
        return renderUploadOptions();
    }
  };

  return (
    <View style={styles.container}>
      <BackButton />
      
      <View style={styles.header}>
        <Text style={styles.title}>Upload Document</Text>
        <Text style={styles.subtitle}>दस्तावेज़ अपलोड करें</Text>
      </View>

      <View style={styles.content}>
        {renderUploadStatus()}
      </View>

      {uploadStatus === 'idle' && (
        <View style={styles.instructions}>
          <Text style={styles.instructionText}>
            Please upload a clear photo of your government-issued ID or relevant document
          </Text>
          <Text style={styles.instructionTextHindi}>
            कृपया अपनी सरकारी पहचान या संबंधित दस्तावेज़ की स्पष्ट तस्वीर अपलोड करें
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
    marginTop: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1D1D1F',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: '#86868B',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  uploadOption: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  optionText: {
    marginLeft: 16,
    flex: 1,
  },
  optionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1D1D1F',
    marginBottom: 4,
  },
  optionSubtitle: {
    fontSize: 14,
    color: '#86868B',
  },
  statusContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1D1D1F',
    marginTop: 16,
    marginBottom: 8,
  },
  statusSubtitle: {
    fontSize: 16,
    color: '#86868B',
    marginBottom: 24,
  },
  continueButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 8,
  },
  continueButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  retryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2F2F7',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  retryButtonText: {
    color: '#007AFF',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
  instructions: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 12,
    marginTop: 20,
  },
  instructionText: {
    fontSize: 14,
    color: '#1D1D1F',
    textAlign: 'center',
    marginBottom: 8,
    lineHeight: 20,
  },
  instructionTextHindi: {
    fontSize: 14,
    color: '#86868B',
    textAlign: 'center',
    lineHeight: 20,
  },
});