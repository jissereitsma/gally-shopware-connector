<?php
declare(strict_types=1);

namespace Gally\ShopwarePlugin\Search;

use Gally\ShopwarePlugin\Service\Configuration;
use Shopware\Core\Content\Product\SalesChannel\Listing\Processor\SortingListingProcessor as BaseSortingListingProcessor;
use Shopware\Core\Framework\DataAbstractionLayer\EntityRepository;
use Shopware\Core\Framework\DataAbstractionLayer\Search\Criteria;
use Shopware\Core\System\SalesChannel\SalesChannelContext;
use Shopware\Core\System\SystemConfig\SystemConfigService;
use Symfony\Component\HttpFoundation\Request;

class SortingListingProcessor extends BaseSortingListingProcessor
{
    private Configuration $configuration;

    public function __construct(
        SystemConfigService $systemConfigService,
        EntityRepository $sortingRepository,
        Configuration $configuration
    ) {
        parent::__construct($systemConfigService, $sortingRepository);
        $this->configuration = $configuration;
    }

    public function prepare(Request $request, Criteria $criteria, SalesChannelContext $context): void
    {
        if (!$this->configuration->isActive($context->getSalesChannelId())
            || $request->getPathInfo() === '/suggest' // Gally does not handle suggest request yet
        ) {
            parent::prepare($request, $criteria, $context);
        }

        // For gally sort criteria is managed in
        // @see \Gally\ShopwarePlugin\Search\CriteriaBuilder::handleSorting
    }
}
