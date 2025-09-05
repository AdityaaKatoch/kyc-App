import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Linking } from 'react-native';
import { router } from 'expo-router';
import { ArrowLeft, BookOpen, FileText, Camera, Shield, CircleHelp as HelpCircle, Play, Phone, MessageCircle, TriangleAlert as AlertTriangle } from 'lucide-react-native';

const guidanceTopics = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    subtitle: 'शुरुआत करना',
    description: 'Learn the basics of KYC process',
    icon: <BookOpen size={24} color="#2563EB" />,
    duration: '3 min read',
  },
  {
    id: 'document-upload',
    title: 'Document Upload Guide',
    subtitle: 'दस्तावेज़ अपलोड गाइड',
    description: 'Step-by-step photo taking instructions',
    icon: <FileText size={24} color="#16A34A" />,
    duration: '5 min read',
  },
  {
    id: 'face-verification',
    title: 'Face Verification',
    subtitle: 'चेहरा सत्यापन',
    description: 'How to complete face authentication',
    icon: <Camera size={24} color="#F97316" />,
    duration: '4 min read',
  },
  {
    id: 'security-tips',
    title: 'Security & Privacy',
    subtitle: 'सुरक्षा और गोपनीयता',
    description: 'Keep your data safe and secure',
    icon: <Shield size={24} color="#EF4444" />,
    duration: '6 min read',
  },
];

export default function GuidanceScreen() {
  const handleTopicPress = (topicId: string) => {
    router.push(`/guidance/${topicId}`);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <ArrowLeft size={24} color="#64748B" />
      </TouchableOpacity>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={styles.logo}>
            <HelpCircle size={40} color="#FFFFFF" />
          </View>
          <Text style={styles.title}>Help & Guidance</Text>
          <Text style={styles.subtitle}>सहायता और मार्गदर्शन</Text>
          <Text style={styles.description}>
            Step-by-step guides to help you complete KYC easily
          </Text>
        </View>

        <View style={styles.videoSection}>
          <TouchableOpacity style={styles.videoCard}>
            <View style={styles.videoThumbnail}>
              <Play size={32} color="#FFFFFF" />
            </View>
            <View style={styles.videoContent}>
              <Text style={styles.videoTitle}>KYC Process Overview</Text>
              <Text style={styles.videoSubtitle}>केवाईसी प्रक्रिया अवलोकन</Text>
              <Text style={styles.videoDuration}>Watch: 2 min video</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.topicsContainer}>
          <Text style={styles.sectionTitle}>Quick Guides / त्वरित गाइड</Text>
          {guidanceTopics.map((topic) => (
            <TouchableOpacity
              key={topic.id}
              style={styles.topicCard}
              onPress={() => handleTopicPress(topic.id)}
            >
              <View style={styles.topicIcon}>
                {topic.icon}
              </View>
              <View style={styles.topicContent}>
                <Text style={styles.topicTitle}>{topic.title}</Text>
                <Text style={styles.topicSubtitle}>{topic.subtitle}</Text>
                <Text style={styles.topicDescription}>{topic.description}</Text>
                <Text style={styles.topicDuration}>{topic.duration}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.helpSection}>
          <Text style={styles.sectionTitle}>Still Need Help? / अभी भी मदद चाहिए?</Text>
          
          <TouchableOpacity style={styles.chatButton} onPress={() => router.push('/(tabs)/chatbot')}>
            <MessageCircle size={20} color="#FFFFFF" />
            <Text style={styles.chatButtonText}>Chat with AI Assistant</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.callButton} onPress={() => Linking.openURL('tel:1800-XXX-XXXX')}>
            <Phone size={20} color="#2563EB" />
            <Text style={styles.callButtonText}>Call Support: 1800-XXX-XXXX</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bottomSpace} />
      </ScrollView>
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
    maxWidth: 300,
  },
  videoSection: {
    marginBottom: 32,
  },
  videoCard: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  videoThumbnail: {
    width: 80,
    backgroundColor: '#2563EB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoContent: {
    flex: 1,
    padding: 16,
  },
  videoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 4,
  },
  videoSubtitle: {
    fontSize: 14,
    color: '#64748B',
    marginBottom: 8,
  },
  videoDuration: {
    fontSize: 12,
    color: '#2563EB',
    fontWeight: '600',
  },
  topicsContainer: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 16,
  },
  topicCard: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
    gap: 12,
  },
  topicIcon: {
    width: 48,
    height: 48,
    backgroundColor: '#F1F5F9',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topicContent: {
    flex: 1,
  },
  topicTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 4,
  },
  topicSubtitle: {
    fontSize: 14,
    color: '#64748B',
    marginBottom: 8,
  },
  topicDescription: {
    fontSize: 14,
    color: '#64748B',
    marginBottom: 4,
  },
  topicDuration: {
    fontSize: 12,
    color: '#2563EB',
    fontWeight: '600',
  },
  helpSection: {
    marginBottom: 32,
  },
  chatButton: {
    backgroundColor: '#2563EB',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderRadius: 12,
    marginBottom: 12,
    gap: 8,
  },
  chatButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  callButton: {
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
  callButtonText: {
    color: '#2563EB',
    fontSize: 16,
    fontWeight: '600',
  },
  bottomSpace: {
    height: 32,
  },
});