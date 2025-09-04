import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { router } from 'expo-router';
import { User, Shield, CreditCard as Edit, LogOut, CircleCheck as CheckCircle, Clock, TriangleAlert as AlertTriangle } from 'lucide-react-native';

export default function ProfileScreen() {
  const handleEditProfile = () => {
    router.push('/kyc-options');
  };

  const handleLogout = () => {
    // In real app, would handle logout
    router.replace('/');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profileImage}>
          <User size={40} color="#FFFFFF" />
        </View>
        <Text style={styles.name}>राहुल शर्मा</Text>
        <Text style={styles.englishName}>Rahul Sharma</Text>
        
        <View style={styles.statusBadge}>
          <CheckCircle size={16} color="#16A34A" />
          <Text style={styles.statusText}>KYC Verified</Text>
        </View>
      </View>

      <View style={styles.verificationCard}>
        <View style={styles.cardHeader}>
          <Shield size={24} color="#16A34A" />
          <Text style={styles.cardTitle}>Verification Status</Text>
        </View>

        <View style={styles.verificationItem}>
          <CheckCircle size={20} color="#16A34A" />
          <Text style={styles.verificationLabel}>Aadhaar Card</Text>
          <Text style={styles.verificationStatus}>Verified</Text>
        </View>

        <View style={styles.verificationItem}>
          <CheckCircle size={20} color="#16A34A" />
          <Text style={styles.verificationLabel}>Face Authentication</Text>
          <Text style={styles.verificationStatus}>94% Match</Text>
        </View>

        <View style={styles.verificationItem}>
          <Clock size={20} color="#F97316" />
          <Text style={styles.verificationLabel}>Valid Until</Text>
          <Text style={styles.verificationStatus}>Dec 2025</Text>
        </View>
      </View>

      <View style={styles.detailsCard}>
        <View style={styles.cardHeader}>
          <User size={24} color="#2563EB" />
          <Text style={styles.cardTitle}>Personal Details</Text>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Date of Birth:</Text>
          <Text style={styles.detailValue}>15/08/1990</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Gender:</Text>
          <Text style={styles.detailValue}>Male</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>State:</Text>
          <Text style={styles.detailValue}>Uttar Pradesh</Text>
        </View>
      </View>

      <View style={styles.securityCard}>
        <View style={styles.cardHeader}>
          <Shield size={24} color="#F97316" />
          <Text style={styles.cardTitle}>Security & Privacy</Text>
        </View>
        
        <View style={styles.securityInfo}>
          <Shield size={16} color="#16A34A" />
          <Text style={styles.securityText}>Your data is encrypted and secure</Text>
        </View>
        <View style={styles.securityInfo}>
          <Shield size={16} color="#16A34A" />
          <Text style={styles.securityText}>Compliant with UIDAI guidelines</Text>
        </View>
      </View>

      <View style={styles.actionButtons}>
        <TouchableOpacity style={styles.editButton} onPress={handleEditProfile}>
          <Edit size={20} color="#2563EB" />
          <Text style={styles.editButtonText}>Update Documents</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <LogOut size={20} color="#EF4444" />
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      </View>
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
  profileImage: {
    width: 80,
    height: 80,
    backgroundColor: '#2563EB',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    shadowColor: '#2563EB',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 4,
  },
  englishName: {
    fontSize: 18,
    color: '#64748B',
    marginBottom: 16,
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0FDF4',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    gap: 6,
  },
  statusText: {
    fontSize: 14,
    color: '#16A34A',
    fontWeight: '600',
  },
  verificationCard: {
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
  securityCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    marginBottom: 32,
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
  },
  verificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
    gap: 12,
  },
  verificationLabel: {
    fontSize: 14,
    color: '#64748B',
    flex: 1,
  },
  verificationStatus: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1E293B',
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
  },
  detailValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1E293B',
  },
  securityInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    gap: 8,
  },
  securityText: {
    fontSize: 14,
    color: '#64748B',
  },
  actionButtons: {
    gap: 16,
    marginBottom: 32,
  },
  editButton: {
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
  editButtonText: {
    color: '#2563EB',
    fontSize: 16,
    fontWeight: '600',
  },
  logoutButton: {
    backgroundColor: '#FFFFFF',
    borderColor: '#EF4444',
    borderWidth: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderRadius: 12,
    gap: 8,
  },
  logoutButtonText: {
    color: '#EF4444',
    fontSize: 16,
    fontWeight: '600',
  },
});