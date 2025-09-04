import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { router } from 'expo-router';
import { Camera, Upload, FileText, CircleCheck as CheckCircle, CircleAlert as AlertCircle, RotateCcw } from 'lucide-react-native';

export default function DocumentUploadScreen() {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'uploading' | 'success' | 'error'>('idle');
  const [documentType, setDocumentType] = useState<string | null>(null);

  const handleCamera = () => {
    setUploadStatus('uploading');
    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setUploadStatus('success');
          setDocumentType('Aadhaar Card');
          setTimeout(() => {
            router.push('/face-auth');
          }, 2000);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const handleGallery = () => {
    Alert.alert('Gallery', 'Gallery upload functionality would be implemented here');
  };

  const handleRetry = () => {
    setUploadProgress(0);
    setUploadStatus('idle');
    setDocumentType(null);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Upload Document</Text>
        <Text style={styles.subtitle}>दस्तावेज़ अपलोड करें</Text>
        <Text style={styles.description}>
          Take a clear photo of your Aadhaar, PAN Card, or Driving License
        </Text>
      </View>

      <View style={styles.uploadArea}>
        {uploadStatus === 'idle' && (
          <>
            <View style={styles.frameGuide}>
              <View style={styles.frame}>
                <FileText size={60} color="#CBD5E1" />
                <Text style={styles.frameText}>Place ID card here</Text>
              </View>
            </View>

            <View style={styles.uploadOptions}>
              <TouchableOpacity style={styles.cameraButton} onPress={handleCamera}>
                <Camera size={24} color="#FFFFFF" />
                <Text style={styles.cameraButtonText}>Take Photo</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.galleryButton} onPress={handleGallery}>
                <Upload size={20} color="#2563EB" />
                <Text style={styles.galleryButtonText}>Upload from Gallery</Text>
              </TouchableOpacity>
            </View>
          </>
        )}

        {uploadStatus === 'uploading' && (
          <View style={styles.uploadingContainer}>
            <View style={styles.progressContainer}>
              <View style={[styles.progressBar, { width: `${uploadProgress}%` }]} />
            </View>
            <Text style={styles.progressText}>Uploading... {uploadProgress}%</Text>
            <Text style={styles.progressSubtext}>Compressing for slow networks</Text>
          </View>
        )}

        {uploadStatus === 'success' && (
          <View style={styles.successContainer}>
            <CheckCircle size={80} color="#16A34A" />
            <Text style={styles.successTitle}>Document Uploaded!</Text>
            <Text style={styles.successText}>
              {documentType} detected and verified
            </Text>
            <Text style={styles.successSubtext}>Redirecting to face verification...</Text>
          </View>
        )}

        {uploadStatus === 'error' && (
          <View style={styles.errorContainer}>
            <AlertCircle size={60} color="#EF4444" />
            <Text style={styles.errorTitle}>Upload Failed</Text>
            <Text style={styles.errorText}>
              Check your network connection and try again
            </Text>
            <TouchableOpacity style={styles.retryButton} onPress={handleRetry}>
              <RotateCcw size={20} color="#FFFFFF" />
              <Text style={styles.retryButtonText}>Retry Upload</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      <View style={styles.tips}>
        <Text style={styles.tipsTitle}>📸 Photo Tips:</Text>
        <Text style={styles.tipText}>• Ensure good lighting</Text>
        <Text style={styles.tipText}>• Keep document flat</Text>
        <Text style={styles.tipText}>• Avoid shadows or glare</Text>
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
    lineHeight: 22,
    maxWidth: 300,
  },
  uploadArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  frameGuide: {
    marginBottom: 40,
  },
  frame: {
    width: 280,
    height: 180,
    borderWidth: 3,
    borderColor: '#2563EB',
    borderStyle: 'dashed',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F1F5F9',
  },
  frameText: {
    marginTop: 12,
    fontSize: 16,
    color: '#64748B',
    fontWeight: '600',
  },
  uploadOptions: {
    width: '100%',
    gap: 16,
  },
  cameraButton: {
    backgroundColor: '#2563EB',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 18,
    borderRadius: 12,
    gap: 8,
  },
  cameraButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  galleryButton: {
    backgroundColor: '#FFFFFF',
    borderColor: '#2563EB',
    borderWidth: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderRadius: 12,
    gap: 8,
  },
  galleryButtonText: {
    color: '#2563EB',
    fontSize: 16,
    fontWeight: '600',
  },
  uploadingContainer: {
    alignItems: 'center',
    width: '100%',
  },
  progressContainer: {
    width: '100%',
    height: 8,
    backgroundColor: '#E2E8F0',
    borderRadius: 4,
    marginBottom: 16,
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#2563EB',
    borderRadius: 4,
  },
  progressText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1E293B',
    marginBottom: 8,
  },
  progressSubtext: {
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
  successText: {
    fontSize: 16,
    color: '#64748B',
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