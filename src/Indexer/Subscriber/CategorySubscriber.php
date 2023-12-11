<?php
/**
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade Gally to newer versions in the future.
 *
 * @package   Gally
 * @author    Gally Team <elasticsuite@smile.fr>
 * @copyright 2022-present Smile
 * @license   Open Software License v. 3.0 (OSL-3.0)
 */

declare(strict_types=1);

namespace Gally\ShopwarePlugin\Indexer\Subscriber;

use Gally\ShopwarePlugin\Indexer\CategoryIndexer;
use Shopware\Core\Content\Category\CategoryEvents;
use Shopware\Core\Framework\DataAbstractionLayer\Event\EntityWrittenEvent;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;

/**
 * Reindex category on save event.
 */
class CategorySubscriber implements EventSubscriberInterface
{
    public function __construct(
        private CategoryIndexer $categoryIndexer
    ) {
    }

    public static function getSubscribedEvents(): array
    {
        return [CategoryEvents::CATEGORY_WRITTEN_EVENT => 'reindex'];
    }

    public function reindex(EntityWrittenEvent $event)
    {
        $documentsIdsToReindex = [];
        foreach ($event->getWriteResults() as $writeResult) {
            $documentsIdsToReindex[] = $writeResult->getPrimaryKey();
        }
        $this->categoryIndexer->reindex($event->getContext(), $documentsIdsToReindex);
    }
}
