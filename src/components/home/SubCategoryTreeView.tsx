import React from 'react';
import { motion } from "framer-motion";
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface TeamMember {
  name: string;
  role: string;
  credentials?: string;
  image: string;
  description?: string;
  email?: string;
  specialties?: string[];
}

interface SubCategory {
  id: string;
  title: string;
  members: TeamMember[];
}

interface SubCategoryTreeViewProps {
  subcategory: SubCategory;
  onMemberClick: (member: TeamMember) => void;
}

export const SubCategoryTreeView: React.FC<SubCategoryTreeViewProps> = ({ subcategory, onMemberClick }) => {
  const members = subcategory.members || [];
  const memberCount = members.length;

  if (memberCount === 0) {
    return (
      <div className="text-center py-20 bg-white/[0.03] rounded-2xl border border-white/[0.06]">
        <p className="text-white/30 text-lg">No members in this category yet</p>
      </div>
    );
  }

  const getMembersPerRow = (total: number): number[] => {
    if (total <= 4) return [total];
    if (total <= 8) return [Math.ceil(total / 2), Math.floor(total / 2)];
    if (total <= 12) return [4, Math.ceil((total - 4) / 2), Math.floor((total - 4) / 2)];
    const rows = Math.ceil(total / 4);
    const distribution: number[] = Array(rows).fill(Math.floor(total / rows));
    let remainder = total % rows;
    for (let i = 0; i < remainder; i++) distribution[i]++;
    return distribution.filter(n => n > 0);
  };

  const rowDistribution = getMembersPerRow(memberCount);
  let memberIndex = 0;

  return (
    <div className="relative py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center mb-20"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-[2px] bg-[#ff6a00] rounded-full" />
          <span className="text-[#ff6a00] text-[11px] font-bold tracking-[0.22em] uppercase">Department</span>
          <div className="w-8 h-[2px] bg-[#ff6a00] rounded-full" />
        </div>
        <h3
          className="text-3xl md:text-5xl font-bold text-center mb-2"
          style={{ background: "linear-gradient(90deg, #ff6a00, #ff9040)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
        >
          {subcategory.title}
        </h3>
        <p className="text-white/30 text-xs font-mono tracking-[0.2em] uppercase mt-1">
          {memberCount} {memberCount === 1 ? 'Member' : 'Members'}
        </p>
        {rowDistribution.length > 0 && (
          <div className="mt-8 w-[2px] h-16 bg-gradient-to-b from-[#ff6a00] to-transparent rounded-full" />
        )}
      </motion.div>

      <div className="space-y-20">
        {rowDistribution.map((membersInRow, rowIndex) => {
          const rowMembers = members.slice(memberIndex, memberIndex + membersInRow);
          memberIndex += membersInRow;

          return (
            <div key={rowIndex} className="relative">
              <svg
                className="absolute -top-16 left-0 w-full h-24 pointer-events-none"
                style={{ zIndex: 0 }}
              >
                <defs>
                  <linearGradient id={`treeGradient-${rowIndex}`} x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#ff6a00" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#ff8c3a" stopOpacity="0.9" />
                  </linearGradient>
                </defs>

                {membersInRow > 1 && (
                  <motion.line
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }} viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: rowIndex * 0.3 }}
                    x1={`${((1) / (membersInRow + 1)) * 100}%`}
                    y1="0"
                    x2={`${((membersInRow) / (membersInRow + 1)) * 100}%`}
                    y2="0"
                    stroke={`url(#treeGradient-${rowIndex})`}
                    strokeWidth="2"
                  />
                )}

                {rowMembers.map((_, index) => (
                  <motion.line
                    key={index}
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }} viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: rowIndex * 0.3 + index * 0.1 + 0.2 }}
                    x1={`${((index + 1) / (membersInRow + 1)) * 100}%`}
                    y1="0"
                    x2={`${((index + 1) / (membersInRow + 1)) * 100}%`}
                    y2="90"
                    stroke={`url(#treeGradient-${rowIndex})`}
                    strokeWidth="2"
                  />
                ))}
              </svg>

              <div className="flex justify-around items-start relative z-10 px-4 md:px-8">
                {rowMembers.map((member, index) => (
                  <motion.div
                    key={member.name}
                    initial={{ scale: 0, opacity: 0, y: 30 }}
                    whileInView={{ scale: 1, opacity: 1, y: 0 }} viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: rowIndex * 0.3 + index * 0.15,
                      type: "spring",
                      stiffness: 200,
                    }}
                    whileHover={{ scale: 1.05, y: -10 }}
                    className="cursor-pointer flex flex-col items-center text-center w-36 md:w-48 group"
                    onClick={() => onMemberClick(member)}
                  >
                    <div className="relative">
                      <div
                        className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-white/10 shadow-2xl transition-all duration-300 group-hover:border-[#ff6a00]/60"
                        style={{ boxShadow: "0 0 0 3px rgba(255,106,0,0.1)" }}
                      >
                        <ImageWithFallback
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-[#0a0a0a] opacity-0 group-hover:opacity-100 transition-all duration-300"
                        style={{ background: "linear-gradient(135deg, #ff6a00, #ff8c3a)" }} />
                    </div>

                    <div className="mt-4 w-full bg-white/[0.04] border border-white/[0.07] rounded-xl p-3 group-hover:border-[#ff6a00]/30 transition-colors duration-300">
                      <h4 className="font-semibold text-white text-sm md:text-base leading-tight group-hover:text-[#ff8c3a] transition-colors">
                        {member.name}
                      </h4>
                      <p className="text-[#ff6a00] text-xs md:text-sm mt-1">
                        {member.role}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
