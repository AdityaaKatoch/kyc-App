import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { router } from 'expo-router';
import { CircleCheck as CheckCircle, Shield, User, FileText, CreditCard as Edit } from 'lucide-react-native';

export default function ReviewScreen() {
  const handleConfirm = () => {
    router.push('/success');
  };

  const handleEdit = () => {
    router.back();
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Review Details</Text>
        <Text style={styles.subtitle}>विवरण की समीक्षा करें</Text>
        <Text style={styles.description}>
          Please verify all information before submitting
        </Text>
      </View>

      <View style={styles.verificationCard}>
        <View style={styles.verificationHeader}>
          <CheckCircle size={24} color="#16A34A" />
          <Text style={styles.verificationTitle}>Verification Complete</Text>
        </View>
        
        <View style={styles.scoreContainer}>
          <Text style={styles.scoreLabel}>Face Match Score</Text>
          <Text style={styles.scoreValue}>94%</Text>
        </View>
      </View>

      <View style={styles.detailsCard}>
        <View style={styles.cardHeader}>
          <FileText size={24} color="#2563EB" />
          <Text style={styles.cardTitle}>Document Details</Text>
          <TouchableOpacity onPress={handleEdit}>
            <Edit size={20} color="#64748B" />
          </TouchableOpacity>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Document Type:</Text>
          <Text style={styles.detailValue}>Aadhaar Card</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Name:</Text>
          <Text style={styles.detailValue}>राहुल शर्मा</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Date of Birth:</Text>
          <Text style={styles.detailValue}>15/08/1990</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>ID Number:</Text>
          <Text style={styles.detailValue}>XXXX XXXX 1234</Text>
        </View>
      </View>

      <View style={styles.detailsCard}>
        <View style={styles.cardHeader}>
          <User size={24} color="#16A34A" />
          <Text style={styles.cardTitle}>Identity Verification</Text>
        </View>

        <View style={styles.verificationBadges}>
          <View style={styles.badge}>
            <Shield size={16} color="#16A34A" />
            <Text style={styles.badgeText}>DigiLocker Verified</Text>
          </View>
          <View style={styles.badge}>
            <Shield size={16} color="#16A34A" />
            <Text style={styles.badgeText}>UIDAI Authenticated</Text>
          </View>
          <View style={styles.badge}>
            <Shield size={16} color="#16A34A" />
            <Text style={styles.badgeText}>Face Match Passed</Text>
          </View>
        </View>
      </View>

      <View style={styles.securityNote}>
        <Shield size={20} color="#F97316" />
        <Text style={styles.securityText}>
          Your data is encrypted and will be used only for verification purposes
        </Text>
      </View>

      <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
        <Text style={styles.confirmButtonText}>Confirm & Submit</Text>
      </TouchableOpacity>
    </ScrollView>
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
  },
  verificationCard: {
    backgroundColor: '#F0FDF4',
    borderColor: '#16A34A',
    borderWidth: 2,
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
  },
  verificationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    gap: 8,
  },
  verificationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#16A34A',
  },
  scoreContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  scoreLabel: {
    fontSize: 16,
    color: '#15803D',
    fontWeight: '600',
  },
  scoreValue: {
    fontSize: 24,
    color: '#15803D',
    fontWeight: 'bold',
  },
  detailsCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    gap: 8,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E293B',
    flex: 1,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },
  detailLabel: {
    fontSize: 14,
    color: '#64748B',
    flex: 1,
  },
  detailValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1E293B',
    flex: 1,
    textAlign: 'right',
  },
  verificationBadges: {
    gap: 12,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0FDF4',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    gap: 8,
  },
  badgeText: {
    fontSize: 14,
    color: '#15803D',
    fontWeight: '600',
  },
  securityNote: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFBEB',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 24,
    gap: 8,
  },
  securityText: {
    fontSize: 14,
    color: '#92400E',
    flex: 1,
    lineHeight: 18,
  },
  confirmButton: {
    backgroundColor: '#16A34A',
    paddingVertical: 18,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 32,
  },
  confirmButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});