
import Hero from "@/components/Hero";
import WhyAttend from "@/components/WhyAttend";
import ExperientialDistricts from "@/components/ExperientialDistricts";
import AgendaTeaser from "@/components/AgendaTeaser";
import ExhibitorRecruitment from "@/components/ExhibitorRecruitment";
import RegistrationModal from "@/components/RegistrationModal";
import { useState } from "react";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'visitor' | 'exhibitor'>('visitor');

  const openModal = (type: 'visitor' | 'exhibitor') => {
    setModalType(type);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen">
      <Hero onRegisterVisitor={() => openModal('visitor')} onBecomeExhibitor={() => openModal('exhibitor')} />
      <WhyAttend />
      <ExperientialDistricts />
      <AgendaTeaser />
      <ExhibitorRecruitment onApplyNow={() => openModal('exhibitor')} />
      
      <RegistrationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        type={modalType}
        onSwitchType={setModalType}
      />
    </div>
  );
};

export default Index;
