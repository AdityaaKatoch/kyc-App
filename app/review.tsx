import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { router } from 'expo-router';
import { CircleCheck as CheckCircle, Shield, User, FileText, CreditCard as Edit } from 'lucide-react-native';
import BackButton from '../components/BackButton';

export default function ReviewScreen() {
  const handleEdit = (section) => {
    // Navigate to edit screen for specific section
    router.push(`/edit/${section}`);
  };

  const handleSubmit = () => {
    // Handle form submission
    router.push('/success');
  };

  return (
    <ScrollView style={styles.container}>
      <BackButton />
      
      <View style={styles.header}>
        <Text style={styles.title}>Review Details</Text>
        <Text style={styles.subtitle}>विवरण की समीक्षा करें</Text>
      </View>

      {/* Personal Information */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <View style={styles.sectionTitleContainer}>
            <User size={20} color="#4F46E5" />
            <Text style={styles.sectionTitle}>Personal Information</Text>
          </View>
          <TouchableOpacity 
            style={styles.editButton}
            onPress={() => handleEdit('personal')}
          >
            <Edit size={16} color="#4F46E5" />
          </TouchableOpacity>
        </View>
        
        <View style={styles.infoGrid}>
          <View style={styles.infoItem}>
            <Text style={styles.label}>Full Name</Text>
            <Text style={styles.value}>John Doe</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.label}>Date of Birth</Text>
            <Text style={styles.value}>01/01/1990</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.label}>Gender</Text>
            <Text style={styles.value}>Male</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.label}>Phone Number</Text>
            <Text style={styles.value}>+91 9876543210</Text>
          </View>
        </View>
      </View>

      {/* Address Information */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <View style={styles.sectionTitleContainer}>
            <FileText size={20} color="#4F46E5" />
            <Text style={styles.sectionTitle}>Address Information</Text>
          </View>
          <TouchableOpacity 
            style={styles.editButton}
            onPress={() => handleEdit('address')}
          >
            <Edit size={16} color="#4F46E5" />
          </TouchableOpacity>
        </View>
        
        <View style={styles.infoGrid}>
          <View style={styles.infoItem}>
            <Text style={styles.label}>Street Address</Text>
            <Text style={styles.value}>123 Main Street</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.label}>City</Text>
            <Text style={styles.value}>Mumbai</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.label}>State</Text>
            <Text style={styles.value}>Maharashtra</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.label}>PIN Code</Text>
            <Text style={styles.value}>400001</Text>
          </View>
        </View>
      </View>

      {/* Document Information */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <View style={styles.sectionTitleContainer}>
            <Shield size={20} color="#4F46E5" />
            <Text style={styles.sectionTitle}>Document Information</Text>
          </View>
          <TouchableOpacity 
            style={styles.editButton}
            onPress={() => handleEdit('documents')}
          >
            <Edit size={16} color="#4F46E5" />
          </TouchableOpacity>
        </View>
        
        <View style={styles.infoGrid}>
          <View style={styles.infoItem}>
            <Text style={styles.label}>Aadhaar Number</Text>
            <Text style={styles.value}>**** **** 1234</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.label}>PAN Number</Text>
            <Text style={styles.value}>ABCDE1234F</Text>
          </View>
        </View>
      </View>

      {/* Verification Status */}
      <View style={styles.verificationSection}>
        <View style={styles.verificationItem}>
          <CheckCircle size={20} color="#10B981" />
          <Text style={styles.verificationText}>All information verified</Text>
        </View>
        <View style={styles.verificationItem}>
          <CheckCircle size={20} color="#10B981" />
          <Text style={styles.verificationText}>Documents uploaded successfully</Text>
        </View>
      </View>

      {/* Submit Button */}
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit Application</Text>
        <Text style={styles.submitButtonSubtext}>आवेदन जमा करें</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  header: {
    padding: 24,
    paddingTop: 60,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: '#64748B',
  },
  section: {
    backgroundColor: '#FFFFFF',
    margin: 16,
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1E293B',
    marginLeft: 8,
  },
  editButton: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#EEF2FF',
  },
  infoGrid: {
    gap: 12,
  },
  infoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },
  label: {
    fontSize: 14,
    color: '#64748B',
    fontWeight: '500',
  },
  value: {
    fontSize: 14,
    color: '#1E293B',
    fontWeight: '600',
  },
  verificationSection: {
    backgroundColor: '#F0FDF4',
    margin: 16,
    borderRadius: 12,
    padding: 20,
    borderWidth: 1,
    borderColor: '#BBF7D0',
  },
  verificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  verificationText: {
    fontSize: 14,
    color: '#166534',
    marginLeft: 8,
    fontWeight: '500',
  },
  submitButton: {
    backgroundColor: '#4F46E5',
    margin: 16,
    marginTop: 8,
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#4F46E5',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  submitButtonSubtext: {
    color: '#C7D2FE',
    fontSize: 14,
  },
});