"use client";

import { useState, useId } from "react";
import {
  FAQ_ITEMS,
  FAQ_CATEGORIES,
  FaqCategory,
  FaqItem,
} from "@/data/faqs";
import styles from "./FaqInteractiveSection.module.css";

interface FaqInteractiveSectionProps {
  initialOpenId?: string | null;
}

export default function FaqInteractiveSection({
  initialOpenId = "what-is-urban-motion",
}: FaqInteractiveSectionProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<FaqCategory>("all");
  const [openId, setOpenId] = useState<string | null>(initialOpenId);

  const searchInputId = useId();

  // Normalize query for instant local filtering
  const trimmedQuery = searchQuery.trim().toLowerCase();

  // Filter items based on active category and search query
  const filteredItems = FAQ_ITEMS.filter((item) => {
    const matchesCategory =
      activeCategory === "all" || item.category === activeCategory;
    const matchesQuery =
      !trimmedQuery ||
      item.question.toLowerCase().includes(trimmedQuery) ||
      item.answer.toLowerCase().includes(trimmedQuery);
    return matchesCategory && matchesQuery;
  });

  // Calculate live count per category for tab badges
  const getCategoryCount = (catId: FaqCategory) => {
    return FAQ_ITEMS.filter((item) => {
      const matchesCat = catId === "all" || item.category === catId;
      const matchesQ =
        !trimmedQuery ||
        item.question.toLowerCase().includes(trimmedQuery) ||
        item.answer.toLowerCase().includes(trimmedQuery);
      return matchesCat && matchesQ;
    }).length;
  };

  // Toggle single open question (collapses if already open)
  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  // Reset all filters
  const handleReset = () => {
    setSearchQuery("");
    setActiveCategory("all");
    setOpenId("what-is-urban-motion");
  };

  // Group items by category if showing all and no search query
  const shouldGroupByCategory = activeCategory === "all" && !trimmedQuery;

  // Distinct category groups
  const categoryGroups = FAQ_CATEGORIES.filter((cat) => cat.id !== "all");

  return (
    <section
      className={`container ${styles.sectionWrapper}`}
      aria-label="Frequently Asked Questions"
    >
      {/* Search and Category Filter Navigation */}
      <div className={styles.controlsContainer}>
        {/* Local Search Input */}
        <div className={styles.searchWrapper}>
          <label htmlFor={searchInputId} className="sr-only">
            Search frequently asked questions
          </label>
          <input
            id={searchInputId}
            type="search"
            className={styles.searchInput}
            placeholder="Search questions or keywords (e.g. price, deposit, WhatsApp)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search questions or keywords"
            autoComplete="off"
            spellCheck="false"
          />
          <svg
            className={styles.searchIcon}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>

          {searchQuery && (
            <button
              type="button"
              className={styles.clearSearchBtn}
              onClick={() => setSearchQuery("")}
              aria-label="Clear search query"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          )}
        </div>

        {/* Category Filter Tabs */}
        <div
          className={styles.tabsContainer}
          role="tablist"
          aria-label="Filter questions by category"
        >
          {FAQ_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            const count = getCategoryCount(cat.id);
            return (
              <button
                key={cat.id}
                type="button"
                role="tab"
                id={`tab-${cat.id}`}
                aria-selected={isActive}
                aria-controls={`panel-${cat.id}`}
                className={`${styles.tabButton} ${
                  isActive ? styles.tabButtonActive : ""
                }`}
                onClick={() => setActiveCategory(cat.id)}
              >
                <span>{cat.label}</span>
                <span className={styles.tabCountBadge} aria-label={`${count} items`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Results Summary Bar */}
      <div className={styles.resultsSummaryBar}>
        <p className={styles.resultsCountText}>
          {trimmedQuery ? (
            <>
              Showing <span className={styles.resultsHighlight}>{filteredItems.length}</span>{" "}
              {filteredItems.length === 1 ? "result" : "results"} for &ldquo;
              <span className={styles.resultsHighlight}>{searchQuery}</span>&rdquo;
            </>
          ) : activeCategory !== "all" ? (
            <>
              Showing <span className={styles.resultsHighlight}>{filteredItems.length}</span>{" "}
              questions in{" "}
              <span className={styles.resultsHighlight}>
                {FAQ_CATEGORIES.find((c) => c.id === activeCategory)?.label}
              </span>
            </>
          ) : (
            <>Showing all {filteredItems.length} questions across 4 categories</>
          )}
        </p>

        {(trimmedQuery || activeCategory !== "all") && (
          <button
            type="button"
            className={styles.resetFilterBtn}
            onClick={handleReset}
          >
            Reset Filters
          </button>
        )}
      </div>

      {/* Empty State */}
      {filteredItems.length === 0 && (
        <div className={styles.emptyState} role="status">
          <div className={styles.emptyIconCircle} aria-hidden="true">
            <svg
              viewBox="0 0 24 24"
              width="28"
              height="28"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
              <line x1="8" y1="8" x2="14" y2="14" />
            </svg>
          </div>
          <h3 className={styles.emptyTitle}>No matching questions found</h3>
          <p className={styles.emptyDescription}>
            We couldn&rsquo;t find any answers matching &ldquo;{searchQuery}&rdquo;
            {activeCategory !== "all" ? " in this category" : ""}. Try adjusting
            your search term or browse our complete FAQ directory.
          </p>
          <button
            type="button"
            className={styles.emptyResetBtn}
            onClick={handleReset}
          >
            <span>Reset Search &amp; Show All</span>
          </button>
        </div>
      )}

      {/* Grouped Mode: When showing all items without search filter */}
      {shouldGroupByCategory && (
        <div>
          {categoryGroups.map((group) => {
            const groupItems = FAQ_ITEMS.filter(
              (item) => item.category === group.id
            );
            if (groupItems.length === 0) return null;

            return (
              <section
                key={group.id}
                className={styles.categoryGroup}
                aria-labelledby={`cat-heading-${group.id}`}
              >
                <div className={styles.categoryGroupHeader}>
                  <h2
                    id={`cat-heading-${group.id}`}
                    className={styles.categoryGroupTitle}
                  >
                    {group.label}
                  </h2>
                  <span className={styles.categoryGroupCount}>
                    {groupItems.length} {groupItems.length === 1 ? "question" : "questions"}
                  </span>
                </div>

                <div className={styles.accordionList}>
                  {groupItems.map((item) => (
                    <FaqItemCard
                      key={item.id}
                      item={item}
                      isOpen={openId === item.id}
                      onToggle={() => toggleItem(item.id)}
                    />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      )}

      {/* Filtered Mode: When a specific category or search query is active */}
      {!shouldGroupByCategory && filteredItems.length > 0 && (
        <div className={styles.accordionList} id={`panel-${activeCategory}`}>
          {filteredItems.map((item) => (
            <FaqItemCard
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onToggle={() => toggleItem(item.id)}
              showCategoryBadge={activeCategory === "all" || Boolean(trimmedQuery)}
            />
          ))}
        </div>
      )}
    </section>
  );
}

interface FaqItemCardProps {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
  showCategoryBadge?: boolean;
}

function FaqItemCard({
  item,
  isOpen,
  onToggle,
  showCategoryBadge = false,
}: FaqItemCardProps) {
  const triggerId = `faq-btn-${item.id}`;
  const panelId = `faq-panel-${item.id}`;

  return (
    <article
      className={`${styles.accordionItem} ${
        isOpen ? styles.accordionItemOpen : ""
      }`}
    >
      <h3 className={styles.accordionHeader}>
        <button
          type="button"
          id={triggerId}
          aria-expanded={isOpen}
          aria-controls={panelId}
          className={styles.accordionTrigger}
          onClick={onToggle}
        >
          <div className={styles.questionTextGroup}>
            {showCategoryBadge && (
              <span className={styles.questionCategoryBadge}>
                {item.categoryLabel}
              </span>
            )}
            <span className={styles.questionTitle}>{item.question}</span>
          </div>

          <span className={styles.indicatorCircle} aria-hidden="true">
            <svg
              className={styles.indicatorIcon}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </span>
        </button>
      </h3>

      <div
        id={panelId}
        role="region"
        aria-labelledby={triggerId}
        className={`${styles.accordionPanel} ${
          isOpen ? styles.accordionPanelOpen : ""
        }`}
      >
        <div className={styles.accordionContent}>
          <div className={styles.answerInner}>
            <p className={styles.answerParagraph}>{item.answer}</p>

            {item.businessPolicyNote && (
              <div className={styles.policyNoteBox}>
                <svg
                  className={styles.policyNoteIcon}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className={styles.policyNoteText}>
                  <strong className={styles.policyNoteLabel}>
                    Direct Verification:
                  </strong>
                  {item.businessPolicyNote}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
